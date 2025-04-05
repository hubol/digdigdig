import { createBitmapFont } from "../../lib/pixi/create-bitmap-font";
import { Tx } from "../textures";

export const fntScribdig = createBitmapFont(Tx.Font.Scribdig, {
    name: "Scribdig",
    lineHeight: 25,
    size: 23,
    characters: {
        "0": { x: 5, y: 5, w: 31, h: 41, xadv: 33 },
        "1": { x: 39, y: 4, w: 23, h: 44, xadv: 25 },
        "2": { x: 70, y: 4, w: 23, h: 45, xadv: 25 },
        "3": { x: 101, y: 5, w: 32, h: 45, xadv: 34 },
        "4": { x: 138, y: 4, w: 30, h: 46, xadv: 32 },
        "5": { x: 172, y: 4, w: 34, h: 44, xadv: 36 },
        "6": { x: 213, y: 4, w: 31, h: 42, xadv: 33 },
        "7": { x: 249, y: 4, w: 35, h: 43, xadv: 37 },
        "8": { x: 293, y: 4, w: 30, h: 42, xadv: 32 },
        "9": { x: 327, y: 3, w: 30, h: 45, xadv: 32 },
        "+": { x: 377, y: 12, w: 24, h: 23, xadv: 25, yoff: 21 },
    },
    kernings: [["6", "7", -1], ["7", "0", -1], ["7", "8", -2]],
});
