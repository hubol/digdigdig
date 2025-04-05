import { cyclic } from "../../lib/math/number";
import { Integer } from "../../lib/math/number-alias-types";
import { PseudoRng } from "../../lib/math/rng";
import { AdjustColor } from "../../lib/pixi/adjust-color";

export function objNpc() {
}

const prng = new PseudoRng();

export function generateNpcTints(seed: Integer) {
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
