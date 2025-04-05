import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { createPlayerObj } from "../objects/obj-player";

export function scnWorld() {
    const lvl = Lvl.World();
    createPlayerObj().at(lvl.PlayerStartMarker).show();
}
