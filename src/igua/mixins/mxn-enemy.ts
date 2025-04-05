import { DisplayObject } from "pixi.js";
import { areRectanglesOverlapping } from "../../lib/math/rectangle";
import { vlerp } from "../../lib/math/vector";
import { objDamage } from "../objects/obj-damage";
import { mxnHoleListener } from "../objects/obj-ground-stage";

interface MxnEnemyArgs {
    health: number;
    healthMaximum: number;
    vulnerableBoxObj: DisplayObject;
}

export function mxnEnemy(obj: DisplayObject, args: MxnEnemyArgs) {
    const state = {
        health: args.health,
    };

    // TODO dispatch took damage, die
    // TODO energy, poise management?
    return obj
        .mixin(mxnHoleListener)
        .merge({ mxnEnemy: { state } })
        .handles("mxnHoleListener:hole_created", (self, holeRect) => {
            if (!areRectanglesOverlapping(args.vulnerableBoxObj.getWorldBounds(), holeRect)) {
                return;
            }

            const damageObj = objDamage(10).at(holeRect.x + holeRect.width / 2, holeRect.y + holeRect.height / 2)
                .show();
            vlerp(damageObj, obj, 0.5);

            // TODO lots of things
            state.health -= 10;
            if (state.health <= 0) {
                self.destroy();
            }
        });
}
