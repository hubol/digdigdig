import { Container } from "pixi.js";
import { sleepf } from "../../lib/game-engine/routines/sleep";
import { Rng } from "../../lib/math/rng";

export function mxnBoilPivot(obj: Container) {
    return obj
        .coro(function* () {
            while (true) {
                if (Rng.bool()) {
                    obj.pivot.x = Rng.int(-4, 4);
                }
                else if (Rng.bool()) {
                    obj.pivot.x += Rng.int(-2, 2);
                }
                if (Rng.bool()) {
                    obj.pivot.y = Rng.int(-4, 4);
                }
                else if (Rng.bool()) {
                    obj.pivot.y += Rng.int(-2, 2);
                }
                yield sleepf(Rng.int(10, 30));
            }
        });
}
