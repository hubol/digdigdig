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
    const lifeObj = objLife().step(self => self.visible = progress.firsts.everTookDamage && !readingBookObj.visible);
    const moneyObj = objMoney().step(self => self.visible = progress.money > 0 && !readingBookObj.visible);
    const treasureMessageObj = objTreasureMessage().invisible();

    const objects = {
        readingBookObj,
        treasureMessageObj,
    };

    return container(energyObj, lifeObj, moneyObj, readingBookObj, treasureMessageObj).merge({ objects });
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

const [txTreasureMessageBackground, txTreasureMessageQuestionMarks] = Tx.Hud.TreasureMessage.split({ count: 2 });

function objTreasureMessage() {
    const textObj = objText.LargeNusty("", { tint: 0xffffff, align: "center", maxWidth: 420 }).mixin(mxnBoilSeed)
        .anchored(
            0.5,
            0.5,
        );

    /**
     * Note: Completely different API from objReadingBook
     */
    const methods = {
        show(message: string) {
            textObj.text = message;
            obj.visible = true;
        },
        clear() {
            obj.visible = false;
        },
    };

    const obj = container(
        Sprite.from(txTreasureMessageBackground),
        Sprite.from(txTreasureMessageQuestionMarks).mixin(mxnBoilPivot),
        textObj.at(231, 25),
    ).at(12, 216);

    return obj.merge({ methods });
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

function objLife() {
    const barMaskObj = Sprite.from(Tx.Hud.EnergyBar).flipH();

    return container(
        Sprite.from(Tx.Hud.Life).tinted(0xff0000).at(18, 0),
        container(
            barMaskObj,
            new Graphics().beginFill(0xffffff).drawRect(0, 0, Tx.Hud.EnergyBar.width, Tx.Hud.EnergyBar.height),
            new Graphics().step(self =>
                self.clear().beginFill(0xff0000).drawRect(
                    0,
                    0,
                    getWidth(Tx.Hud.EnergyBar.width, progress.life / progress.lifeMaximum),
                    Tx.Hud.EnergyBar.height,
                )
            ),
        )
            .at(54, 3)
            .filtered(new SpriteMaskFilter(barMaskObj)),
    )
        .at(158, 5);
}

function objMoney() {
    const barMaskObj = Sprite.from(Tx.Hud.EnergyBar).flipV();

    return container(
        Sprite.from(Tx.Hud.Money).tinted(0xffc400).at(2, 0),
        container(
            barMaskObj,
            new Graphics().beginFill(0xffffff).drawRect(0, 0, Tx.Hud.EnergyBar.width, Tx.Hud.EnergyBar.height),
            new Graphics().step(self =>
                self.clear().beginFill(0xffc400).drawRect(
                    0,
                    0,
                    getWidth(Tx.Hud.EnergyBar.width, progress.money / progress.moneyMaximum),
                    Tx.Hud.EnergyBar.height,
                )
            ),
        )
            .at(54, 3)
            .filtered(new SpriteMaskFilter(barMaskObj)),
    )
        .at(328, 5);
}

function getWidth(width: number, unit: number) {
    const value = Math.round(width * unit);
    return Math.max(Math.sign(unit), Math.min(width, value));
}

export type ObjOverlay = ReturnType<typeof objOverlay>;
