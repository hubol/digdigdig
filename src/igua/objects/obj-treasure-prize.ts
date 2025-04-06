import { container } from "../../lib/pixi/container";
import { mxnInhabitsAcre } from "../mixins/mxn-inhabits-acre";
import { playerObj } from "./obj-player";
import { coroGivePlayerTreasure, TreasureKind } from "./obj-treasure";

export function objTreasurePrize(kind: TreasureKind) {
    return container()
        .mixin(mxnInhabitsAcre)
        .dispatches<"objTreasurePrize:reward">()
        .handles("objTreasurePrize:reward", self => {
            self.coro(function* () {
                yield () => self.mxnInhabitsAcre.methods.isPlayerInsideAcre() && !playerObj.state.isBusy;
                playerObj.state.isBusy = true;
                yield* coroGivePlayerTreasure(kind, self);
                playerObj.state.isBusy = false;
                self.destroy();
            });
        });
}
