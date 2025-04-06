import { Graphics } from "pixi.js";
import { Tx } from "../../assets/textures";
import { factor, interp, interpv } from "../../lib/game-engine/routines/interp";
import { Rng } from "../../lib/math/rng";
import { vnew } from "../../lib/math/vector-type";
import { container } from "../../lib/pixi/container";
import { scene } from "../globals";
import { mxnAttack } from "../mixins/mxn-attack";
import { mxnBoilScaleX } from "../mixins/mxn-boil-scale-x";
import { mxnShadow } from "../mixins/mxn-shadow";
import { playerObj } from "./obj-player";
import { objIndexedSprite } from "./utils/obj-indexed-sprite";

const txs = Tx.Enemy.GoonSpell.split({ width: 80 });
const v = vnew();

export function objGoonSpell(damage: number) {
    const sprite = objIndexedSprite(txs);
    const bodyHurtBoxObj = new Graphics().beginFill(0xff0000).drawRect(-20, -8, 30, 38).at(37, 30).invisible();
    const feetHurtBoxObj = new Graphics().beginFill(0xff0000).drawRect(-15, -8, 30, 16).at(37, 95).invisible();

    return container(
        sprite.pivoted(34, 54).at(34, 54).mixin(mxnBoilScaleX),
        bodyHurtBoxObj,
        feetHurtBoxObj,
    )
        .pivoted(37, 95)
        .mixin(mxnShadow, {})
        .mixin(mxnAttack, { damage, bodyHurtBoxObj, feetHurtBoxObj })
        .coro(function* (self) {
            self.mxnShadow.controls.size = "small";
            yield interp(sprite, "textureIndex").to(2).over(200);
            sprite.coro(function* () {
                while (true) {
                    yield interp(sprite, "textureIndex").to(5).over(Rng.int(200, 400));
                    yield interp(sprite, "textureIndex").to(2).over(Rng.int(200, 400));
                }
            });
            v.at(playerObj).add(self, -1).normalize().scale(400);
            yield interpv(self).factor(factor.sine).translate(v).over(4000);
            yield interpv(sprite.scale).steps(2).to(0, 0).over(250);
            self.destroy();
        })
        .show(scene.perspectiveStage);
}
