import { createBitmapFont } from "../../lib/pixi/create-bitmap-font";
import { Tx } from "../textures";

const characters = {
    " ": { x: 0, y: 0, w: 0, h: 0, xadv: 9, yoff: 0 },
    A: { x: 6, y: 7, w: 19, h: 23, xadv: 20 },
    B: { x: 28, y: 7, w: 13, h: 23, xadv: 14 },
    C: { x: 44, y: 7, w: 14, h: 22, xadv: 15 },
    D: { x: 62, y: 7, w: 14, h: 23, xadv: 15 },
    E: { x: 79, y: 7, w: 11, h: 23, xadv: 12 },
    F: { x: 92, y: 7, w: 11, h: 23, xadv: 12 },
    G: { x: 104, y: 7, w: 16, h: 23, xadv: 17 },
    H: { x: 122, y: 7, w: 14, h: 23, xadv: 15 },
    I: { x: 139, y: 7, w: 7, h: 23, xadv: 8 },
    J: { x: 148, y: 7, w: 17, h: 23, xadv: 18 },
    K: { x: 167, y: 7, w: 14, h: 23, xadv: 15 },
    L: { x: 185, y: 7, w: 12, h: 24, xadv: 13 },
    M: { x: 200, y: 7, w: 16, h: 23, xadv: 17 },
    N: { x: 220, y: 7, w: 14, h: 23, xadv: 15 },
    O: { x: 239, y: 6, w: 16, h: 24, xadv: 17 },
    P: { x: 258, y: 7, w: 13, h: 23, xadv: 14 },
    Q: { x: 276, y: 7, w: 19, h: 26, xadv: 20 },
    R: { x: 8, y: 43, w: 14, h: 24, xadv: 15 },
    S: { x: 23, y: 42, w: 13, h: 24, xadv: 14 },
    T: { x: 40, y: 43, w: 15, h: 23, xadv: 16 },
    U: { x: 59, y: 43, w: 15, h: 23, xadv: 16 },
    V: { x: 78, y: 43, w: 17, h: 23, xadv: 18 },
    W: { x: 99, y: 43, w: 22, h: 24, xadv: 23 },
    X: { x: 123, y: 42, w: 15, h: 24, xadv: 16 },
    Y: { x: 144, y: 43, w: 12, h: 23, xadv: 13 },
    Z: { x: 165, y: 43, w: 18, h: 23, xadv: 19 },
    a: { x: 188, y: 49, w: 15, h: 17, xadv: 16, yoff: 6 },
    b: { x: 207, y: 43, w: 14, h: 23, xadv: 15, yoff: 0 },
    c: { x: 224, y: 50, w: 13, h: 16, xadv: 14, yoff: 7 },
    d: { x: 241, y: 43, w: 14, h: 23, xadv: 15, yoff: 0 },
    e: { x: 257, y: 50, w: 16, h: 17, xadv: 17, yoff: 6 },
    f: { x: 275, y: 43, w: 17, h: 23, xadv: 18, yoff: 0 },
    g: { x: 8, y: 84, w: 15, h: 25, xadv: 16, yoff: 7 },
    h: { x: 29, y: 77, w: 13, h: 23, xadv: 14, yoff: 0 },
    i: { x: 48, y: 81, w: 4, h: 19, xadv: 5, yoff: 4 },
    j: { x: 54, y: 81, w: 11, h: 31, xadv: 12, yoff: 4 },
    k: { x: 71, y: 77, w: 12, h: 24, xadv: 13, yoff: 0 },
    l: { x: 88, y: 77, w: 5, h: 23, xadv: 6, yoff: 0 },
    m: { x: 99, y: 84, w: 25, h: 16, xadv: 26, yoff: 7 },
    n: { x: 131, y: 85, w: 15, h: 15, xadv: 16, yoff: 8 },
    o: { x: 153, y: 85, w: 15, h: 15, xadv: 16, yoff: 8 },
    p: { x: 173, y: 84, w: 14, h: 26, xadv: 15, yoff: 7 },
    q: { x: 193, y: 83, w: 20, h: 29, xadv: 21, yoff: 6 },
    r: { x: 216, y: 84, w: 11, h: 16, xadv: 12, yoff: 7 },
    s: { x: 231, y: 84, w: 13, h: 16, xadv: 14, yoff: 7 },
    t: { x: 247, y: 77, w: 13, h: 23, xadv: 14, yoff: 0 },
    u: { x: 265, y: 84, w: 15, h: 16, xadv: 16, yoff: 7 },
    v: { x: 5, y: 123, w: 19, h: 17, xadv: 20, yoff: 6 },
    w: { x: 30, y: 124, w: 30, h: 16, xadv: 31, yoff: 7 },
    x: { x: 65, y: 124, w: 17, h: 16, xadv: 18, yoff: 7 },
    y: { x: 90, y: 125, w: 16, h: 27, xadv: 17, yoff: 7 },
    z: { x: 113, y: 124, w: 17, h: 15, xadv: 18, yoff: 8 },
    ".": { x: 139, y: 136, w: 3, h: 3, xadv: 4, yoff: 20 },
    "?": { x: 151, y: 115, w: 15, h: 24, xadv: 16, yoff: 0 },
    "!": { x: 173, y: 116, w: 3, h: 23, xadv: 4, yoff: 0 },
    "'": { x: 185, y: 115, w: 3, h: 5, xadv: 4, yoff: -1 },
    "\"": { x: 185, y: 115, w: 8, h: 5, xadv: 9, yoff: -1 },
    ",": { x: 201, y: 136, w: 5, h: 6, xadv: 6, yoff: 20 },
    ":": { x: 218, y: 119, w: 3, h: 15, xadv: 4, yoff: 4 },
    ";": { x: 234, y: 119, w: 4, h: 17, xadv: 5, yoff: 3 },
    "0": { x: 5, y: 158, w: 16, h: 23, xadv: 17, yoff: 0 },
    "1": { x: 24, y: 158, w: 7, h: 23, xadv: 8, yoff: 0 },
    "2": { x: 34, y: 158, w: 14, h: 23, xadv: 15, yoff: 0 },
    "3": { x: 52, y: 158, w: 17, h: 23, xadv: 18, yoff: 0 },
    "4": { x: 71, y: 158, w: 15, h: 23, xadv: 16, yoff: 0 },
    "5": { x: 90, y: 158, w: 17, h: 23, xadv: 18, yoff: 0 },
    "6": { x: 111, y: 158, w: 14, h: 23, xadv: 15, yoff: 0 },
    "7": { x: 129, y: 158, w: 19, h: 23, xadv: 20, yoff: 0 },
    "8": { x: 151, y: 157, w: 15, h: 24, xadv: 16, yoff: -1 },
    "9": { x: 170, y: 157, w: 15, h: 24, xadv: 16, yoff: -1 },
};

Object.values(characters).forEach(x => x.xadv += 2);

export const fntOldMaiden = createBitmapFont(Tx.Font.OldMaiden, {
    name: "Old Maiden",
    size: 23,
    lineHeight: 27,
    characters,
    kernings: [["P", "A", -2], ["T", "A", -3], ["R", "T", -2], ["A", "W", -3], ["a", "w", -3], ["q", "u", -5]],
});
