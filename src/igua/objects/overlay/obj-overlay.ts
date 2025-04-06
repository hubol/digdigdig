import { Container, Graphics, Sprite, SpriteMaskFilter, Texture } from "pixi.js";
import { objText } from "../../../assets/fonts";
import { Tx } from "../../../assets/textures";
import { interp, interpv } from "../../../lib/game-engine/routines/interp";
import { RgbInt } from "../../../lib/math/number-alias-types";
import { container } from "../../../lib/pixi/container";
import { mxnBoilPivot } from "../../mixins/mxn-boil-pivot";
import { mxnBoilSeed } from "../../mixins/mxn-boil-seed";
import { progress } from "../progress";

export function objOverlay() {
    const readingBookObj = objReadingBook();
    const energyObj = objEnergy().step(self => self.visible = progress.firsts.everDrilled && !readingBookObj.visible);
    const lifeObj = objLife().step(self =>
        self.visible = (progress.firsts.everTookDamage || progress.upgrades.life > 0) && !readingBookObj.visible
    );
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
    return objBar({
        tint: 0x000000,
        txTitle: Tx.Hud.Energy,
        getValue: () => progress.energy,
        getMaximum: () => progress.energyMaximum,
        printValue: "at_maximum",
    })
        .at(5, 5);
}

function objLife() {
    return objBar({
        tint: 0xff0000,
        txTitle: Tx.Hud.Life,
        getValue: () => progress.life,
        getMaximum: () => progress.lifeMaximum,
        printValue: "always",
    })
        .at(158, 5);
}

function objMoney() {
    return objBar({
        tint: 0xffc400,
        txTitle: Tx.Hud.Money,
        getValue: () => progress.money,
        getMaximum: () => progress.moneyMaximum,
        printValue: "always",
    })
        .at(328, 5);
}

let objBarCallsCount = 0;

interface ObjBarArgs {
    txTitle: Texture;
    tint: RgbInt;
    getValue(): number;
    getMaximum(): number;
    printValue: "always" | "at_maximum";
}

function objBar(args: ObjBarArgs) {
    const barMaskObj = Sprite.from(Tx.Hud.EnergyBar);

    if (objBarCallsCount % 3 === 1) {
        barMaskObj.flipH();
    }
    else if (objBarCallsCount % 3 === 2) {
        barMaskObj.flipV();
    }

    const fillGfx = new Graphics();
    const textMaskGfx = new Graphics();

    const gfxs = [fillGfx, textMaskGfx];

    const bgTextObj = objText.Medium("", { tint: args.tint }).at(3, 4);
    const fgTextObj = objText.Medium("", { tint: 0xffffff }).masked(textMaskGfx).at(bgTextObj);

    objBarCallsCount += 1;

    return container(
        Sprite.from(args.txTitle).tinted(args.tint).at(48 - args.txTitle.width, 0),
        container(
            barMaskObj,
            textMaskGfx,
            new Graphics().beginFill(0xffffff).drawRect(0, 0, Tx.Hud.EnergyBar.width, Tx.Hud.EnergyBar.height),
            bgTextObj,
            fillGfx,
            fgTextObj,
        )
            .step(() => {
                const value = args.getValue();
                const maximum = args.getMaximum();

                for (const gfx of gfxs) {
                    gfx.clear().beginFill(args.tint).drawRect(
                        0,
                        0,
                        getWidth(Tx.Hud.EnergyBar.width, value / maximum),
                        Tx.Hud.EnergyBar.height,
                    );
                }

                bgTextObj.text = "" + Math.round(value);
                fgTextObj.text = bgTextObj.text;

                bgTextObj.visible = args.printValue === "always" || value >= maximum;
                fgTextObj.visible = bgTextObj.visible;
            })
            .at(54, 3)
            .filtered(new SpriteMaskFilter(barMaskObj)),
    );
}

function getWidth(width: number, unit: number) {
    const value = Math.round(width * unit);
    return Math.max(Math.sign(unit), Math.min(width, value));
}

export type ObjOverlay = ReturnType<typeof objOverlay>;
