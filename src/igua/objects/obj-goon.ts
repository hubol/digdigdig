import { Graphics, Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { Instances } from "../../lib/game-engine/instances";
import { Coro } from "../../lib/game-engine/routines/coro";
import { holdf } from "../../lib/game-engine/routines/hold";
import { factor, interp, interpv } from "../../lib/game-engine/routines/interp";
import { sleep, sleepf } from "../../lib/game-engine/routines/sleep";
import { PolarInt } from "../../lib/math/number-alias-types";
import { Rng } from "../../lib/math/rng";
import { VectorSimple, vnew } from "../../lib/math/vector-type";
import { container } from "../../lib/pixi/container";
import { MapRgbFilter } from "../../lib/pixi/filters/map-rgb-filter";
import { scene } from "../globals";
import { mxnEnemy } from "../mixins/mxn-enemy";
import { mxnInhabitsAcre } from "../mixins/mxn-inhabits-acre";
import { mxnShadow } from "../mixins/mxn-shadow";
import { objFxRelease } from "./fx/obj-fx-release";
import { objBlock } from "./obj-block";
import { objGoonPencilBurst } from "./obj-goon-pencil-burst";
import { objGoonSpell } from "./obj-goon-spell";
import { generateObjCharacterArgs } from "./obj-npc";
import { playerObj } from "./obj-player";

const [txIdle, txWalk, ...txsCharge] = Tx.Enemy.Goon.split({ width: 92 });
const txsStretch = Tx.Enemy.GoonStretch.split({ width: 92 });
const txHurt = Tx.Enemy.GoonHurt;

interface ObjGoonArgs {
    rank: number;
}

type GoonMove = "spell" | "burst";

const GoonRanks: GoonRank[] = [
    { health: 30, energy: 500, spellAttackDamage: 10, spellTimeRate: 1, moves: ["spell"], noticeFactor: 1 },
    { health: 30, energy: 500, spellAttackDamage: 20, spellTimeRate: 1, moves: ["spell"], noticeFactor: 1 },
    { health: 70, energy: 500, spellAttackDamage: 30, spellTimeRate: 0.75, moves: ["spell"], noticeFactor: 1 },
    {
        health: 70,
        energy: 500,
        spellAttackDamage: 30,
        spellTimeRate: 0.75,
        moves: ["spell", "burst"],
        noticeFactor: 1.5,
    },
    {
        health: 150,
        energy: 900,
        spellAttackDamage: 30,
        spellTimeRate: 0.5,
        moves: ["spell", "burst"],
        noticeFactor: 4,
    },
];

interface GoonRank {
    health: number;
    energy: number;
    spellAttackDamage: number;
    spellTimeRate: number;
    moves: GoonMove[];
    noticeFactor: number;
}

export function objGoon(goonArgs: ObjGoonArgs) {
    const rank = GoonRanks[goonArgs.rank] ?? GoonRanks[0];
    const args = generateObjCharacterArgs();

    const filter = new MapRgbFilter(args.tint0, args.tint1, args.tint2);
    const sprite = Sprite.from(txIdle).filtered(filter);

    const state = {
        speed: vnew(),
        pedometer: 0,
        chargeUnit: 0,
        stretchUnit: 0,
        remainingPainCount: 0,
        lastAcceptablePosition: vnew(),
        canRecoverEnergy: true,
        energy: rank.energy,
        energyMaximum: rank.energy,
    };

    const consts = {
        minimumEnergyToEngage: 100,
        energyPerMove: 250,
    };

    function* coroIdle() {
        while (true) {
            yield sleep(Rng.int(1000, 3000));
            state.speed.at(Rng.vunit()).scale(1.5);
            yield sleep(Rng.int(1000, 3000));
            state.speed.at(0, 0);
        }
    }

    function noticePlayer(position: VectorSimple, facing: PolarInt) {
        const minDistanceToNotice = (Math.sign(playerObj.x - position.x) === facing ? 400 : (100 * rank.noticeFactor))
            * rank.noticeFactor;
        return Math.abs(playerObj.x - position.x) < minDistanceToNotice
            && Math.abs(playerObj.y - position.y) < 100 * rank.noticeFactor
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

            if (state.remainingPainCount <= 0) {
                self.add(state.speed);
            }

            if (
                self.mxnInhabitsAcre.methods.isInsideAcre()
                && self.y >= self.mxnInhabitsAcre.consts.minY + 60
                && self.x >= self.mxnInhabitsAcre.consts.minX + 60
                && self.x <= self.mxnInhabitsAcre.consts.maxX - 60
                && !vulnerableBoxObj.collidesOne(Instances(objBlock))
            ) {
                state.lastAcceptablePosition.at(self);
            }
            else {
                self.at(state.lastAcceptablePosition);
                state.speed.scale(-1);
            }

            if (state.remainingPainCount > 0) {
                sprite.texture = txHurt;
                state.remainingPainCount -= 1;
            }
            else if (state.chargeUnit <= 0 && state.stretchUnit <= 0) {
                sprite.texture = state.pedometer === 0 ? txIdle : (state.pedometer % 2 < 1 ? txWalk : txIdle);
            }
            // This all looks like shit..........
            // But it's the last 10 hours....
            else if (state.stretchUnit > 0) {
                const txIndex = Math.max(
                    0,
                    Math.min(txsStretch.length - 1, Math.round(state.stretchUnit * txsStretch.length)),
                );
                sprite.texture = txsStretch[txIndex];
            }
            else if (state.chargeUnit > 0) {
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
        .mixin(mxnEnemy, { health: rank.health, healthMaximum: rank.health, vulnerableBoxObj })
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
                state.energy -= consts.energyPerMove;

                state.speed.at(0, 0);
                yield interpv(sprite).factor(factor.sine).to(0, -32).over(275 * rank.spellTimeRate);
                yield interpv(sprite).to(0, 0).over(200 * rank.spellTimeRate);

                const move = Rng.choose(...rank.moves);

                while (true) {
                    state.chargeUnit = 0;
                    state.stretchUnit = 0;

                    yield* Coro.race([
                        interp(state, move === "spell" ? "chargeUnit" : "stretchUnit").to(1).over(
                            500 * rank.spellTimeRate,
                        ),
                        () => state.remainingPainCount > 0,
                    ]);

                    if (state.chargeUnit >= 1 || state.stretchUnit >= 1) {
                        break;
                    }
                    yield () => state.remainingPainCount <= 0;
                }

                if (move === "spell") {
                    objGoonSpell(rank.spellAttackDamage, rank.spellTimeRate).at(self).filtered(filter);
                    yield sleep(150 * rank.spellTimeRate);
                    yield interp(state, "chargeUnit").to(0).over(350 * rank.spellTimeRate);
                }
                else if (move === "burst") {
                    const burstObj = objGoonPencilBurst(8, rank.spellAttackDamage - 10, Rng.choose("default", "fast"))
                        .at(self).show();
                    yield () => burstObj.destroyed;
                    yield interp(state, "stretchUnit").to(0).over(350 * rank.spellTimeRate);
                }

                state.canRecoverEnergy = true;
            }
        })
        .handles("mxnEnemy:died", (self) => objFxRelease().at(self).tinted(args.tint0))
        .handles("mxnEnemy:damaged", () => state.remainingPainCount = 20)
        .show(scene.perspectiveStage);
}
