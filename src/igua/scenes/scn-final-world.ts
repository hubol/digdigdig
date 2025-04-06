import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { objBlock } from "../objects/obj-block";
import { createPlayerObj, playerObj } from "../objects/obj-player";

export function scnFinalWorld() {
    const lvl = Lvl.FinalWorld();
    createPlayerObj().at(lvl.PlayerStartMarker);
}
