import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { objPlayer } from "../objects/obj-player";

export function scnWorld() {
    const lvl = Lvl.World();
    objPlayer().at(lvl.PlayerStartMarker).show();
}
