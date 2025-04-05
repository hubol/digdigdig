import { Tx } from "../../assets/textures";
import { factor, interp, interpv } from "../../lib/game-engine/routines/interp";
import { Rng } from "../../lib/math/rng";
import { container } from "../../lib/pixi/container";
import { scene } from "../globals";
import { mxnBoilScaleX } from "../mixins/mxn-boil-scale-x";
import { playerObj } from "./obj-player";
import { objIndexedSprite } from "./utils/obj-indexed-sprite";

const txs = Tx.Enemy.GoonSpell.split({ width: 80 });

export function objGoonSpell() {
    const sprite = objIndexedSprite(txs);

    return container(
        sprite.pivoted(34, 54).at(34, 54).mixin(mxnBoilScaleX),
    )
        .pivoted(37, 95)
        .coro(function* (self) {
            yield interp(sprite, "textureIndex").to(2).over(200);
            sprite.coro(function* () {
                while (true) {
                    yield interp(sprite, "textureIndex").to(5).over(Rng.int(200, 400));
                    yield interp(sprite, "textureIndex").to(2).over(Rng.int(200, 400));
                }
            });
            yield interpv(self).factor(factor.sine).to(playerObj).over(2000);
            yield interpv(sprite.scale).steps(2).to(0, 0).over(250);
            self.destroy();
        })
        .show(scene.perspectiveStage);
}
