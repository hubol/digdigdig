import { DisplayObject } from "pixi.js";
import { playerObj } from "../objects/obj-player";
import { progress } from "../objects/progress";

interface MxnAttackArgs {
    bodyHurtBoxObj: DisplayObject;
    feetHurtBoxObj: DisplayObject;
    damage: number;
}

export function mxnAttack(obj: DisplayObject, args: MxnAttackArgs) {
    let damagedPlayer = false;

    return obj.step(() => {
        if (damagedPlayer || playerObj.state.isBusy) {
            return;
        }

        if (
            args.feetHurtBoxObj.collides(playerObj.objects.feetVulnerableBoxObj)
            && args.bodyHurtBoxObj.collides(playerObj.objects.bodyVulnerableBoxObj)
        ) {
            // TODO death and stuff
            progress.life = Math.max(0, progress.life - args.damage);
            progress.firsts.everTookDamage = true;

            damagedPlayer = true;

            if (progress.life <= 0) {
                playerObj.methods.die();
            }
        }
    });
}
