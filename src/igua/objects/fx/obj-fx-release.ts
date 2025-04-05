import { Tx } from "../../../assets/textures";
import { Coro } from "../../../lib/game-engine/routines/coro";
import { interp } from "../../../lib/game-engine/routines/interp";
import { Rng } from "../../../lib/math/rng";
import { scene } from "../../globals";
import { objIndexedSprite } from "../utils/obj-indexed-sprite";

const txs0 = Tx.Effects.Release0.split({ width: 447 });
const txs1 = Tx.Effects.Release1.split({ width: 447 });

const txs = [...txs0, ...txs1];

export function objFxRelease() {
    return objIndexedSprite(txs)
        .anchored(0.5, 1)
        .coro(function* (self) {
            yield interp(self, "textureIndex").to(txs.length).over(Rng.intc(750, 850));
            self.destroy();
        })
        .show(scene.perspectiveStage);
}
