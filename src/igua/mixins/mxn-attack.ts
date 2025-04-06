import { DisplayObject } from "pixi.js";
import { Sfx } from "../../assets/sounds";
import { playerObj } from "../objects/obj-player";
import { progress } from "../objects/progress";

interface MxnAttackArgs {
    bodyHurtBoxObj: DisplayObject;
    feetHurtBoxObj: DisplayObject;
    damage: number;
    group?: {};
}

export function mxnAttack(obj: DisplayObject, args: MxnAttackArgs, isActive = true) {
    let damagedPlayer = false;

    const state = {
        isActive,
    };

    return obj
        .merge({ mxnAttack: { state } })
        .step(() => {
            if (
                damagedPlayer || playerObj.state.isBusy || !state.isActive
                || (args?.group as AttackGroup)?.damagedPlayer
            ) {
                return;
            }

            if (
                args.feetHurtBoxObj.collides(playerObj.objects.feetVulnerableBoxObj)
                && args.bodyHurtBoxObj.collides(playerObj.objects.bodyVulnerableBoxObj)
            ) {
                playerObj.play(Sfx.PlayerTakeDamage.rate(0.9, 1.1));

                progress.life = Math.max(0, progress.life - args.damage);
                progress.firsts.everTookDamage = true;

                damagedPlayer = true;
                if (args.group) {
                    (args?.group as AttackGroup).damagedPlayer = true;
                }

                if (progress.life <= 0) {
                    playerObj.methods.die();
                }
            }
        });
}

interface AttackGroup {
    damagedPlayer?: boolean;
}
