import { Graphics, Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { Coro } from "../../lib/game-engine/routines/coro";
import { holdf } from "../../lib/game-engine/routines/hold";
import { factor, interp, interpv } from "../../lib/game-engine/routines/interp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { PolarInt } from "../../lib/math/number-alias-types";
import { Rng } from "../../lib/math/rng";
import { distance } from "../../lib/math/vector";
import { VectorSimple, vnew } from "../../lib/math/vector-type";
import { container } from "../../lib/pixi/container";
import { MapRgbFilter } from "../../lib/pixi/filters/map-rgb-filter";
import { scene } from "../globals";
import { mxnEnemy } from "../mixins/mxn-enemy";
import { mxnInhabitsAcre } from "../mixins/mxn-inhabits-acre";
import { mxnShadow } from "../mixins/mxn-shadow";
import { objGoonSpell } from "./obj-goon-spell";
import { generateObjCharacterArgs } from "./obj-npc";
import { playerObj } from "./obj-player";

const [txIdle, txWalk, ...txsCharge] = Tx.Enemy.Goon.split({ width: 92 });
const v = vnew();

export function objGoon() {
    const args = generateObjCharacterArgs();

    const filter = new MapRgbFilter(args.tint0, args.tint1, args.tint2);
    const sprite = Sprite.from(txIdle).filtered(filter);

    const state = {
        speed: vnew(),
        pedometer: 0,
        chargeUnit: 0,
        lastInsidePosition: vnew(),
        canRecoverEnergy: true,
        energy: 500,
        energyMaximum: 500,
    };

    const consts = {
        minimumEnergyToEngage: 100,
        energyPerSpell: 250,
    };

    function* coroIdle() {
        yield sleep(Rng.int(1000, 3000));
        state.speed.at(Rng.vunit()).scale(1.5);
        yield sleep(Rng.int(1000, 3000));
        state.speed.at(0, 0);
    }

    function noticePlayer(position: VectorSimple, facing: PolarInt) {
        const minDistanceToNotice = Math.sign(playerObj.x - position.x) === facing ? 400 : 100;
        return Math.abs(playerObj.x - position.x) < minDistanceToNotice && Math.abs(playerObj.y - position.y) < 100
            && state.energy > consts.minimumEnergyToEngage;
    }

    const vulnerableBoxObj = new Graphics().beginFill(0xff0000).drawRect(0, 30, 92, 109).invisible();

    return container(
        sprite,
        vulnerableBoxObj,
    )
        .mixin(mxnInhabitsAcre)
        .step(self => {
            if (Math.sign(state.speed.x) !== 0) {
                self.scale.x = -Math.sign(state.speed.x);
            }
            else {
                state.pedometer = 0;
            }

            state.pedometer += state.speed.vlength * 0.05;
            self.add(state.speed);

            if (self.mxnInhabitsAcre.methods.isInsideAcre() && self.y >= self.mxnInhabitsAcre.consts.minY + 40) {
                state.lastInsidePosition.at(self);
            }
            else {
                self.at(state.lastInsidePosition);
                state.speed.scale(-1);
            }

            if (state.chargeUnit <= 0) {
                sprite.texture = state.pedometer === 0 ? txIdle : (state.pedometer % 2 < 1 ? txWalk : txIdle);
            }
            else {
                const txIndex = Math.max(
                    0,
                    Math.min(txsCharge.length - 1, Math.round(state.chargeUnit * txsCharge.length)),
                );
                sprite.texture = txsCharge[txIndex];
            }

            if (state.canRecoverEnergy) {
                state.energy = Math.min(state.energyMaximum, state.energy + 1);
            }
        })
        .pivoted(48, 134)
        .mixin(mxnShadow, {})
        .mixin(mxnEnemy, { health: 30, healthMaximum: 30, vulnerableBoxObj })
        .coro(function* (self) {
            while (true) {
                yield* Coro.race([
                    coroIdle(),
                    holdf(
                        () => self.mxnInhabitsAcre.methods.isPlayerInsideAcre() && noticePlayer(self, -self.scale.x),
                        6,
                    ),
                ]);

                self.scale.x = -Math.sign(playerObj.x - self.x) || 1;

                state.canRecoverEnergy = false;
                state.energy -= consts.energyPerSpell;

                state.speed.at(0, 0);
                yield interpv(sprite).factor(factor.sine).to(0, -32).over(275);
                yield interpv(sprite).to(0, 0).over(200);

                yield* Coro.all([
                    interp(state, "chargeUnit").to(1).over(500),
                    Coro.chain([sleep(400), () => (objGoonSpell().at(self).filtered(filter), true)]),
                ]);
                yield sleep(500);
                state.chargeUnit = 0;

                state.canRecoverEnergy = true;
            }
        })
        .show(scene.perspectiveStage);
}
