import { Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";

export function objBook(message: string) {
    return Sprite.from(Tx.Hints.Book).anchored(0.5, 0.5);
}
