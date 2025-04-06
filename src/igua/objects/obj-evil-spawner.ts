import { holdf } from "../../lib/game-engine/routines/hold";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { container } from "../../lib/pixi/container";
import { mxnInhabitsAcre } from "../mixins/mxn-inhabits-acre";
import { objGoonSpell } from "./obj-goon-spell";

export function objEvilSpawner() {
    return container()
        .mixin(mxnInhabitsAcre)
        .coro(function* (self) {
            while (true) {
                yield holdf(() => self.mxnInhabitsAcre.methods.isPlayerInsideAcre(), 120);
                objGoonSpell(20, 1).at(self.mxnInhabitsAcre.consts.centerX, self.mxnInhabitsAcre.consts.minY - 20);
            }
        });
}
