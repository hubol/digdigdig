import { Sprite } from "pixi.js";
import { objText } from "../../assets/fonts";
import { Tx } from "../../assets/textures";
import { Coro } from "../../lib/game-engine/routines/coro";
import { interp, interpv } from "../../lib/game-engine/routines/interp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { container } from "../../lib/pixi/container";

export function objDamage(amount: number) {
    const damageFreshObj = Sprite.from(Tx.Hud.DamageFresh).anchored(0.5, 0.5);

    return container(
        Sprite.from(Tx.Hud.Damage).anchored(0.5, 0.5),
        damageFreshObj,
        objText.LargeNusty("" + amount, { tint: 0 }).anchored(0.5, 0.5),
    )
        .coro(function* (self) {
            yield* Coro.all([
                interpv(self).translate(0, -8).over(300),
                interp(damageFreshObj, "alpha").steps(3).to(0).over(600),
            ]);
            yield sleep(900);
            self.destroy();
        });
}
