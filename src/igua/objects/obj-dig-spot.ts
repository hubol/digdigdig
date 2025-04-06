import { Graphics } from "pixi.js";
import { container } from "../../lib/pixi/container";
import { mxnStaticAffectedByHoles } from "./obj-ground-stage";

export function objDigSpot() {
    const obj = new Graphics().beginFill(0xff0000).drawRect(0, 0, 1, 1).mixin(mxnStaticAffectedByHoles);

    return obj.merge({
        get isDug() {
            return obj.mxnStaticAffectedByHoles.state.coverageUnit >= 0.75;
        },
    });
}
