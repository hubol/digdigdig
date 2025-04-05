import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { objGoon } from "../objects/obj-goon";
import { createPlayerObj } from "../objects/obj-player";

export function scnWorld() {
    const lvl = Lvl.World();
    createPlayerObj().at(lvl.PlayerStartMarker);
    lvl.WaterLineGroup.children.forEach(obj => obj.mixin(mxnBoilPivot));
    // objGoon().at(lvl.PlayerStartMarker);
}
