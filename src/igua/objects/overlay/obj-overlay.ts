import { Container, Graphics, Sprite, SpriteMaskFilter } from "pixi.js";
import { objText } from "../../../assets/fonts";
import { Tx } from "../../../assets/textures";
import { interp, interpv } from "../../../lib/game-engine/routines/interp";
import { container } from "../../../lib/pixi/container";
import { mxnBoilPivot } from "../../mixins/mxn-boil-pivot";
import { mxnBoilSeed } from "../../mixins/mxn-boil-seed";
import { progress } from "../progress";

export function objOverlay() {
    const readingBookObj = objReadingBook();
    const energyObj = objEnergy().step(self => self.visible = progress.firsts.everDrilled && !readingBookObj.visible);

    const objects = {
        readingBookObj,
    };

    return container(energyObj, readingBookObj).merge({ objects });
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
        .at(242, -50)
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
                yield interpv(obj).steps(3).to(242, 50).over(300);
                yield () => !shown;
                yield interpv(obj).steps(3).to(242, -50).over(300);
                obj.visible = false;
            }
        });
}

function objEnergy() {
    const barMaskObj = Sprite.from(Tx.Hud.EnergyBar);

    return container(
        Sprite.from(Tx.Hud.Energy).tinted(0),
        container(
            barMaskObj,
            new Graphics().beginFill(0xffffff).drawRect(0, 0, Tx.Hud.EnergyBar.width, Tx.Hud.EnergyBar.height),
            new Graphics().step(self =>
                self.clear().beginFill(0).drawRect(
                    0,
                    0,
                    getWidth(Tx.Hud.EnergyBar.width, progress.energy / progress.energyMaximum),
                    Tx.Hud.EnergyBar.height,
                )
            ),
        )
            .at(54, 3)
            .filtered(new SpriteMaskFilter(barMaskObj)),
    )
        .at(5, 5);
}

function getWidth(width: number, unit: number) {
    const value = Math.round(width * unit);
    return Math.max(Math.sign(unit), Math.min(width, value));
}

export type ObjOverlay = ReturnType<typeof objOverlay>;
