import { Graphics, Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { Coro } from "../../lib/game-engine/routines/coro";
import { factor, interp, interpv } from "../../lib/game-engine/routines/interp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { Rng } from "../../lib/math/rng";
import { vnew } from "../../lib/math/vector-type";
import { container } from "../../lib/pixi/container";
import { range } from "../../lib/range";
import { scene } from "../globals";
import { mxnAttack } from "../mixins/mxn-attack";
import { mxnShadow } from "../mixins/mxn-shadow";

export function objGoonPencilBurst(count: number, damage: number, speed: "default" | "fast") {
    return container()
        .coro(function* (self) {
            const windupTimeMs = speed === "default" ? 750 : 450;

            const attackGroup = {};

            const deltaRadians = (Math.PI * 2) / count;
            const pencilObjs = range(count).map((i) => {
                const rad = i * deltaRadians;
                const unit = vnew(Math.cos(rad), -Math.sin(rad));
                return objGoonPencil(damage, windupTimeMs, speed, attackGroup)
                    .merge({ unit }).at(self).add(unit, 24);
            });

            yield sleep(windupTimeMs + Rng.int(0, 250));

            const motionMs = speed === "default" ? 1500 : 1100;

            yield* Coro.all(pencilObjs.map(pencilObj => {
                pencilObj.state.isLaunched = true;
                return interpv(pencilObj).factor(factor.sine).translate(pencilObj.unit.scale(350)).over(motionMs);
            }));

            for (const pencilObj of pencilObjs) {
                pencilObj.destroy();
                self.destroy();
            }
        });
}

export function objGoonPencil(damage: number, windupTimeMs: number, speed: "default" | "fast", group = {}) {
    const bodyHurtBoxObj = new Graphics().beginFill(0xff0000).drawRect(-12, -60, 24, 38).invisible();
    const feetHurtBoxObj = new Graphics().beginFill(0x00ff00).drawRect(-15, -8, 30, 16).invisible();

    const sprite = Sprite.from(Tx.Enemy.PencilProjectile)
        .anchored(0.5, 0.5)
        .at(0, -40);

    const state = {
        isLaunched: false,
    };

    return container(sprite, bodyHurtBoxObj, feetHurtBoxObj)
        .merge({ state })
        .mixin(mxnAttack, { damage, bodyHurtBoxObj, feetHurtBoxObj, group })
        .mixin(mxnShadow, {})
        .coro(function* (self) {
            self.mxnShadow.controls.size = "small";
            self.mxnAttack.state.isActive = false;
            yield interp(sprite, "angle").steps(8).to(360).over(windupTimeMs);
            yield () => state.isLaunched;
            self.mxnAttack.state.isActive = true;
            while (true) {
                sprite.angle = 0;
                yield interp(sprite, "angle").steps(8).to(360).over(speed === "default" ? 400 : 200);
            }
        }, -1)
        .show(scene.perspectiveStage);
}
