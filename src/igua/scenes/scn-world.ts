import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { createPlayerObj } from "../objects/obj-player";

export function scnWorld() {
    const lvl = Lvl.World();
    createPlayerObj().at(lvl.PlayerStartMarker).show();
    lvl.WaterLineGroup.children.forEach(obj => obj.mixin(mxnBoilPivot));
}
