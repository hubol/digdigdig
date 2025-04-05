import { DisplayObject } from "pixi.js";
import { areRectanglesOverlapping } from "../../lib/math/rectangle";
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

            // TODO lots of things
            state.health -= 10;
            if (state.health <= 0) {
                self.destroy();
            }
        });
}
