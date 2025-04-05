import { Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { Rng } from "../../lib/math/rng";
import { layers } from "../globals";
import { mxnStaticAffectedByHoles } from "./obj-ground-stage";
import { playerObj } from "./obj-player";

export function objBook(message: string) {
    let corruptedMessage = message;
    const coveragePerCorruptedLetter = 1 / (message.length - 2);

    return Sprite.from(Tx.Hints.Book).anchored(0.5, 0.5)
        .mixin(mxnStaticAffectedByHoles)
        .coro(function* (self) {
            while (true) {
                const coverage = self.mxnStaticAffectedByHoles.state.coverageUnit;
                yield () => self.mxnStaticAffectedByHoles.state.coverageUnit - coverage >= coveragePerCorruptedLetter;
                const count = (self.mxnStaticAffectedByHoles.state.coverageUnit - coverage)
                    / coveragePerCorruptedLetter;
                for (let i = 0; i < count; i++) {
                    const index = Rng.int(corruptedMessage.length);
                    const before = corruptedMessage.substring(0, index);
                    const after = corruptedMessage.substring(index + 1);
                    corruptedMessage = before + after;
                }
            }
        })
        .step(self => {
            if (self.collides(playerObj) && corruptedMessage.length > 0) {
                layers.overlay.objects.readingBookObj.methods.show(corruptedMessage);
            }
            else {
                layers.overlay.objects.readingBookObj.methods.hide();
            }
        });
}
