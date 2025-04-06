import { DisplayObject } from "pixi.js";
import { Sfx } from "../../assets/sounds";
import { sleepf } from "../../lib/game-engine/routines/sleep";
import { areRectanglesOverlapping } from "../../lib/math/rectangle";
import { vlerp } from "../../lib/math/vector";
import { objDamage } from "../objects/obj-damage";
import { mxnHoleListener } from "../objects/obj-ground-stage";
import { progress } from "../objects/progress";

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
        .dispatches<"mxnEnemy:damaged">()
        .dispatches<"mxnEnemy:died">()
        .handles("mxnHoleListener:hole_created", (self, holeRect) => {
            if (!areRectanglesOverlapping(args.vulnerableBoxObj.getWorldBounds(), holeRect)) {
                return;
            }

            const damageObj = objDamage(progress.attackPower).at(
                holeRect.x + holeRect.width / 2,
                holeRect.y + holeRect.height / 2,
            )
                .show();
            vlerp(damageObj, obj, 0.5);

            // TODO lots of things
            state.health -= progress.attackPower;
            if (state.health <= 0) {
                self.play(Sfx.EnemyDie.rate(0.9, 1.1));
                self.dispatch("mxnEnemy:died");
                self.destroy();
            }
            else {
                self.play(Sfx.EnemyTakeDamage.rate(0.9, 1.1));
                self.dispatch("mxnEnemy:damaged");
            }
        })
        .coro(function* () {
            while (true) {
                const deaths = progress.deaths;
                yield () => progress.deaths !== deaths;
                state.health = args.healthMaximum;
                yield sleepf(1);
            }
        });
}
