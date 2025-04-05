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
import { mxnInhabitsAcre } from "../mixins/mxn-inhabits-acre";
import { mxnShadow } from "../mixins/mxn-shadow";
import { objGoonSpell } from "./obj-goon-spell";
import { generateObjCharacterArgs } from "./obj-npc";
import { playerObj } from "./obj-player";

const [txIdle, txWalk, ...txsCharge] = Tx.Enemy.Goon.split({ width: 92 });

export function objGoon() {
    const args = generateObjCharacterArgs();

    const filter = new MapRgbFilter(args.tint0, args.tint1, args.tint2);
    const sprite = Sprite.from(txIdle).filtered(filter);
    const footHitboxObj = new Graphics().beginFill(0xff0000).drawRect(-20, -6, 40, 12).invisible();

    const state = {
        speed: vnew(),
        pedometer: 0,
        chargeUnit: 0,
        lastInsidePosition: vnew(),
    };

    function* coroIdle() {
        yield sleep(Rng.int(1000, 3000));
        state.speed.at(Rng.vunit()).scale(1.5);
        yield sleep(Rng.int(1000, 3000));
        state.speed.at(0, 0);
    }

    function noticePlayer(position: VectorSimple, facing: PolarInt) {
        const minDistanceToNotice = Math.sign(playerObj.x - position.x) === facing ? 400 : 100;
        return Math.abs(playerObj.x - position.x) < minDistanceToNotice && Math.abs(playerObj.y - position.y) < 100;
    }

    return container(
        footHitboxObj,
        sprite,
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
        })
        .pivoted(48, 134)
        .mixin(mxnShadow, { hitboxObj: footHitboxObj })
        .coro(function* (self) {
            while (true) {
                yield* Coro.race([
                    coroIdle(),
                    holdf(
                        () => self.mxnInhabitsAcre.methods.isPlayerInsideAcre() && noticePlayer(self, -self.scale.x),
                        6,
                    ),
                ]);

                state.speed.at(0, 0);
                yield interpv(sprite).factor(factor.sine).to(0, -16).over(150);
                yield interpv(sprite).to(0, 0).over(100);

                yield* Coro.all([
                    interp(state, "chargeUnit").to(1).over(500),
                    Coro.chain([sleep(400), () => (objGoonSpell().at(self).filtered(filter), true)]),
                ]);
                yield sleep(100);
                state.chargeUnit = 0;
            }
        })
        .show(scene.perspectiveStage);
}
