import { Container, Sprite } from "pixi.js";
import { objText } from "../../../assets/fonts";
import { Tx } from "../../../assets/textures";
import { container } from "../../../lib/pixi/container";

export function objOverlay() {
    const readingBookObj = objReadingBook();
    const objects = {
        readingBookObj,
    };

    return container(readingBookObj).merge({ objects });
}

function objReadingBook() {
    const textObj = objText.LargeNusty("", { tint: 0xA0A070, align: "center", maxWidth: 430 }).anchored(0.5, 0.5).at(
        242,
        50,
    );

    let count = 0;
    let shownAtCount = -1;

    const methods = {
        show(message: string) {
            textObj.text = message;
            obj.visible = true;
            shownAtCount = count;
        },
    };

    const obj = container(Sprite.from(Tx.Hud.Book), textObj);

    return obj.merge({ methods }).invisible().step(self => {
        count++;
        if (shownAtCount < count - 2) {
            self.visible = false;
        }
    });
}

export type ObjOverlay = ReturnType<typeof objOverlay>;
