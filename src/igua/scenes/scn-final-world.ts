import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { Mzk } from "../../assets/music";
import { holdf } from "../../lib/game-engine/routines/hold";
import { Jukebox } from "../core/igua-audio";
import { scene } from "../globals";
import { createPlayerObj, playerObj } from "../objects/obj-player";
import { transitionToScene } from "./scn-choose-character";
import { scnEnding } from "./scn-ending";

export function scnFinalWorld() {
    Jukebox.play(Mzk.World);

    const lvl = Lvl.FinalWorld();
    createPlayerObj().at(lvl.PlayerStartMarker);

    lvl.FinalGoon.handles("mxnEnemy:died", () => {
        scene.stage.coro(function* () {
            yield holdf(() => !playerObj.state.isBusy, 180);
            transitionToScene(scnEnding);
        });
    });
}
