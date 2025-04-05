import { Container } from "pixi.js";
import { sleepf } from "../../lib/game-engine/routines/sleep";
import { Rng } from "../../lib/math/rng";

export function mxnBoilSeed(obj: Container & { seed: number }) {
    return obj
        .coro(function* () {
            while (true) {
                obj.seed = Rng.int(10_000_000, 420_000_000);
                yield sleepf(Rng.int(10, 30));
            }
        });
}
