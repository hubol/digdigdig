import { Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { mxnStaticAffectedByHoles } from "./obj-ground-stage";

export function objBook(message: string) {
    return Sprite.from(Tx.Hints.Book).anchored(0.5, 0.5).mixin(mxnStaticAffectedByHoles);
}
