import { objText } from "../../assets/fonts";
import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { interp } from "../../lib/game-engine/routines/interp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { Key } from "../globals";

export function scnPlaceholder() {
    const lvl = Lvl.Placeholder();

    // objPlayer().at(128, 128).show();

    // lvl.Block.step(self => {
    //     if (Key.isDown("ArrowUp")) {
    //         self.y -= 3;
    //     }
    // });

    // objText.Large("Yoooooooo!").show();
}
