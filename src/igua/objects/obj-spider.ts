import { Graphics, Sprite } from "pixi.js";
import { Sfx } from "../../assets/sounds";
import { Tx } from "../../assets/textures";
import { Instances } from "../../lib/game-engine/instances";
import { interp, interpv } from "../../lib/game-engine/routines/interp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { Rng } from "../../lib/math/rng";
import { vnew } from "../../lib/math/vector-type";
import { container } from "../../lib/pixi/container";
import { MapRgbFilter } from "../../lib/pixi/filters/map-rgb-filter";
import { scene } from "../globals";
import { mxnEnemy } from "../mixins/mxn-enemy";
import { mxnInhabitsAcre } from "../mixins/mxn-inhabits-acre";
import { mxnShadow } from "../mixins/mxn-shadow";
import { objFxRelease } from "./fx/obj-fx-release";
import { objBlock } from "./obj-block";
import { objGoonPencil } from "./obj-goon-pencil-burst";
import { generateObjCharacterArgs } from "./obj-npc";
import { playerObj } from "./obj-player";

const [txIdle, txWalk0, txWalk1] = Tx.Enemy.Spider.split({ width: 58 });
const txHurt = Tx.Enemy.SpiderHurt;
const txsWalk = [txWalk0, txIdle, txWalk1, txIdle];

export function objSpider() {
    const args = generateObjCharacterArgs();

    const filter = new MapRgbFilter(args.tint0, args.tint1, args.tint2);
    const sprite = Sprite.from(txIdle).filtered(filter);

    const state = {
        speed: vnew(),
        pedometer: 0,
        lastAcceptablePosition: vnew(),
        remainingPainCount: 0,
        isCasting: false,
    };

    const vulnerableBoxObj = new Graphics().beginFill(0xff0000).drawRect(0, 0, 58, 38).invisible();

    return container(
        vulnerableBoxObj,
        sprite,
    )
        .mixin(mxnInhabitsAcre)
        .step(self => {
            if (Math.sign(state.speed.x) !== 0) {
                self.scale.x = Math.sign(state.speed.x);
            }
            else {
                state.pedometer = 0;
            }

            state.pedometer += state.speed.vlength * 0.03;
            self.add(state.speed);

            // Copy-pasted from objGoon
            if (self.mxnInhabitsAcre.methods.isInsideAcre() && !vulnerableBoxObj.collidesOne(Instances(objBlock))) {
                state.lastAcceptablePosition.at(self);
            }
            else {
                self.at(state.lastAcceptablePosition);
                state.speed.scale(-1);
            }

            state.remainingPainCount--;

            if (state.pedometer === 0) {
                sprite.texture = (state.remainingPainCount > 0 || state.isCasting) ? txHurt : txIdle;
            }
            else {
                sprite.texture = txsWalk[Math.floor(state.pedometer) % txsWalk.length];
            }
        })
        .pivoted(29, 38)
        .mixin(mxnShadow, {})
        .mixin(mxnEnemy, { health: 30, healthMaximum: 30, vulnerableBoxObj })
        .coro(function* (self) {
            self.mxnShadow.controls.size = "small";

            while (true) {
                yield sleep(Rng.int(500, 1000));
                state.speed.at(Rng.vunit()).scale(1.5);
                yield sleep(Rng.int(1800, 3000));
                state.speed.at(0, 0);

                if (
                    self.mxnEnemy.state.health < 30 && self.mxnInhabitsAcre.methods.isPlayerInsideAcre()
                    && Math.sign(playerObj.x - self.x) === self.scale.x
                ) {
                    objSpiderPencil().at(self);
                    yield sleep(3000);
                }
            }
        })
        .handles("mxnEnemy:died", (self) => objFxRelease().at(self).tinted(args.tint0).scaled(0.5, 0.5))
        .handles("mxnEnemy:damaged", (self) => {
            state.speed.at(0, 0);
            state.remainingPainCount = 20;
            self.coro(function* () {
                yield interpv(self.pivot).translate(0, 20).over(230);
                yield interpv(self.pivot).translate(0, -20).over(160);
            });
        })
        .show(scene.perspectiveStage);
}

function objSpiderPencil() {
    return objGoonPencil(10, 1000, "default")
        .coro(function* (self) {
            self.play(Sfx.SpiderReveal.rate(0.9, 1.1));
            yield sleep(1000);
            self.play(Sfx.SpiderThrow.rate(0.9, 1.1));
            self.state.isLaunched = true;
            yield interpv(self).to(playerObj).over(2000);
            self.mxnAttack.state.isActive = false;
            yield interpv(self.scale).steps(3).to(0, 0).over(500);
            self.destroy();
        });
}
