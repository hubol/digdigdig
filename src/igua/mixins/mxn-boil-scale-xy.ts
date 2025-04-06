import { Container } from "pixi.js";
import { sleepf } from "../../lib/game-engine/routines/sleep";
import { Rng } from "../../lib/math/rng";

export function mxnBoilScaleXY(obj: Container) {
    return obj
        .coro(function* () {
            while (true) {
                if (Rng.bool()) {
                    obj.scale.x = Math.abs(obj.scale.x) * Rng.intp();
                }
                if (Rng.bool()) {
                    obj.scale.y = Math.abs(obj.scale.y) * Rng.intp();
                }
                yield sleepf(Rng.int(10, 30));
            }
        });
}
