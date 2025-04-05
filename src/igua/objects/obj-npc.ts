import { cyclic } from "../../lib/math/number";
import { Integer } from "../../lib/math/number-alias-types";
import { PseudoRng, Rng } from "../../lib/math/rng";
import { AdjustColor } from "../../lib/pixi/adjust-color";
import { ObjCharacterArgs } from "./obj-character";

export function objNpc() {
}

const prng = new PseudoRng();

export function generateObjCharacterArgs(seed = Rng.int(10_000_000, 420_000_000)): ObjCharacterArgs {
    prng.seed = seed;

    const hue = prng.float(360);

    return {
        tint0: AdjustColor.hsv(hue, prng.float(70, 100), prng.float(40, 70)).toPixi(),
        tint1: AdjustColor.hsv(
            cyclic(hue + prng.float(30, 270) * prng.intp(), 0, 360),
            prng.float(70, 100),
            prng.float(70, 100),
        ).toPixi(),
        tint2: AdjustColor.hsv(
            cyclic(hue + prng.float(30, 270) * prng.intp(), 0, 360),
            prng.float(30, 70),
            prng.float(70, 100),
        )
            .toPixi(),
    };
}
