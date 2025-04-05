import { Container } from "pixi.js";
import { sleepf } from "../../lib/game-engine/routines/sleep";
import { Rng } from "../../lib/math/rng";

export function mxnBoilScaleX(obj: Container) {
    return obj
        .coro(function* () {
            while (true) {
                obj.scale.x = Math.abs(obj.scale.x) * Rng.intp();
                yield sleepf(Rng.int(10, 30));
            }
        });
}
