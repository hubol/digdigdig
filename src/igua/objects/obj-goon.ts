import { Graphics, Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { Rng } from "../../lib/math/rng";
import { vnew } from "../../lib/math/vector-type";
import { container } from "../../lib/pixi/container";
import { MapRgbFilter } from "../../lib/pixi/filters/map-rgb-filter";
import { mxnInhabitsAcre } from "../mixins/mxn-inhabits-acre";
import { mxnShadow } from "../mixins/mxn-shadow";
import { generateObjCharacterArgs } from "./obj-npc";

const [txIdle, txWalk, ...txsCharge] = Tx.Enemy.Goon.split({ width: 92 });

export function objGoon() {
    const args = generateObjCharacterArgs();

    const sprite = Sprite.from(txIdle).filtered(new MapRgbFilter(args.tint0, args.tint1, args.tint2));
    const footHitboxObj = new Graphics().beginFill(0xff0000).drawRect(-20, -6, 40, 12).invisible();

    const speed = vnew();
    let pedometer = 0;
    let chargeUnit = 0;

    const lastInsidePosition = vnew();

    function* coroIdle() {
        yield sleep(Rng.int(1000, 3000));
        speed.at(Rng.vunit()).scale(1.5);
        yield sleep(Rng.int(1000, 3000));
        speed.at(0, 0);
    }

    return container(
        footHitboxObj,
        sprite,
    )
        .mixin(mxnInhabitsAcre)
        .step(self => {
            if (Math.sign(speed.x) !== 0) {
                self.scale.x = -Math.sign(speed.x);
            }
            else {
                pedometer = 0;
            }

            pedometer += speed.vlength * 0.05;
            self.add(speed);

            if (self.mxnInhabitsAcre.methods.isInsideAcre() && self.y >= self.mxnInhabitsAcre.consts.minY + 40) {
                lastInsidePosition.at(self);
            }
            else {
                self.at(lastInsidePosition);
                speed.scale(-1);
            }

            if (chargeUnit <= 0) {
                sprite.texture = pedometer === 0 ? txIdle : (pedometer % 2 < 1 ? txWalk : txIdle);
            }
            else {
                // TODO
            }
        })
        .pivoted(48, 134)
        .mixin(mxnShadow, { hitboxObj: footHitboxObj })
        .coro(function* () {
            while (true) {
                yield* coroIdle();
            }
        });
}
