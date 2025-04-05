import { Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { nlerp } from "../../lib/math/number";
import { Rng } from "../../lib/math/rng";
import { layers } from "../globals";
import { mxnStaticAffectedByHoles } from "./obj-ground-stage";
import { playerObj } from "./obj-player";

export function objBook(message: string) {
    let corruptedMessage = message;

    return Sprite.from(Tx.Hints.Book).anchored(0.5, 0.5)
        .mixin(mxnStaticAffectedByHoles)
        .step(self => {
            const desiredLength = Math.max(
                0,
                Math.round(
                    nlerp(message.length, 0, self.mxnStaticAffectedByHoles.state.coverageUnit * 1.1),
                ),
            );
            while (corruptedMessage.length > desiredLength) {
                const index = Rng.int(corruptedMessage.length);
                const before = corruptedMessage.substring(0, index);
                const after = corruptedMessage.substring(index + 1);
                corruptedMessage = before + after;
            }
            if (self.collides(playerObj.objects.feetHitboxObj) && corruptedMessage.length > 0) {
                layers.overlay.objects.readingBookObj.methods.show(corruptedMessage);
            }
        });
}
