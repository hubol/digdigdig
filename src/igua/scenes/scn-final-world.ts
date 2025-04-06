import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { holdf } from "../../lib/game-engine/routines/hold";
import { scene } from "../globals";
import { createPlayerObj, playerObj } from "../objects/obj-player";
import { transitionToScene } from "./scn-choose-character";
import { scnEnding } from "./scn-ending";

export function scnFinalWorld() {
    const lvl = Lvl.FinalWorld();
    createPlayerObj().at(lvl.PlayerStartMarker);

    lvl.FinalGoon.handles("mxnEnemy:died", () => {
        scene.stage.coro(function* () {
            yield holdf(() => !playerObj.state.isBusy, 60);
            // TODO fanfare? anything?
            transitionToScene(scnEnding);
        });
    });
}
