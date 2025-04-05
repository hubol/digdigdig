import { Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { VectorSimple } from "../../lib/math/vector-type";

export function objAcre(origin: VectorSimple) {
    return Sprite.from(Tx.Hints.Acre);
}
