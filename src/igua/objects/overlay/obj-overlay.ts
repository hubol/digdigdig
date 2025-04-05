import { Container, Sprite } from "pixi.js";
import { objText } from "../../../assets/fonts";
import { Tx } from "../../../assets/textures";
import { interp, interpv } from "../../../lib/game-engine/routines/interp";
import { container } from "../../../lib/pixi/container";
import { mxnBoilPivot } from "../../mixins/mxn-boil-pivot";
import { mxnBoilSeed } from "../../mixins/mxn-boil-seed";

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
    )
        .mixin(mxnBoilSeed);

    let count = 0;
    let shownAtCount = -1;
    let shown = false;

    const methods = {
        show(message: string) {
            textObj.text = message;
            shown = true;
            shownAtCount = count;
        },
    };

    const obj = container(Sprite.from(Tx.Hud.Book).mixin(mxnBoilPivot), textObj);

    return obj.merge({ methods })
        .invisible()
        .pivoted(242, 50)
        .at(242, 50)
        .scaled(0, 0)
        .step(() => {
            count++;
            if (shownAtCount < count - 2) {
                shown = false;
            }
        })
        .coro(function* (obj) {
            while (true) {
                yield () => shown;
                obj.visible = true;
                yield interpv(obj.scale).steps(3).to(1, 1).over(300);
                yield () => !shown;
                yield interpv(obj.scale).steps(3).to(0, 0).over(300);
                obj.visible = false;
            }
        });
}

export type ObjOverlay = ReturnType<typeof objOverlay>;
