import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { createPlayerObj } from "../objects/obj-player";

export function scnFinalWorld() {
    const lvl = Lvl.FinalWorld();
    createPlayerObj().at(lvl.PlayerStartMarker);
}
