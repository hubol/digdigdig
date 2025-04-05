import { objText } from "../../assets/fonts";
import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { Key } from "../globals";
import { objPlayer } from "../objects/obj-player";

export function scnPlaceholder() {
    const lvl = Lvl.Placeholder();

    objPlayer().show();

    // lvl.Block.step(self => {
    //     if (Key.isDown("ArrowUp")) {
    //         self.y -= 3;
    //     }
    // });

    // objText.Large("Yoooooooo!").show();
}
