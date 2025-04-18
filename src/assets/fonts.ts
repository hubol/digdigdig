import { IBitmapTextStyle } from "pixi.js";
import { BitmapText } from "pixi.js";
import { IrregularBitmapText } from "../igua/lib/irregular-bitmap-text";
import { fntDiggit, fntDiggitMono } from "./bitmap-fonts/fnt-diggit";
import { fntErotix } from "./bitmap-fonts/fnt-erotix";
import { fntErotixLight } from "./bitmap-fonts/fnt-erotix-light";
import { fntFlaccid } from "./bitmap-fonts/fnt-flaccid";
import { fntGoodBoy } from "./bitmap-fonts/fnt-good-boy";
import { fntOldMaiden } from "./bitmap-fonts/fnt-old-maiden";
import { fntScribdig } from "./bitmap-fonts/fnt-scribdig";

type Style = Partial<Omit<IBitmapTextStyle, "fontName">>;

export const objText = {
    XSmallIrregular(text = "", style: Style = {}) {
        return new IrregularBitmapText(text, { fontName: fntFlaccid.font, ...style });
    },
    SmallDigits(text = "", style: Style = {}) {
        return new BitmapText(text, { fontName: fntDiggit.font, ...style });
    },
    SmallDigitsMono(text = "", style: Style = {}) {
        return new BitmapText(text, { fontName: fntDiggitMono.font, ...style });
    },
    MediumIrregular(text = "", style: Style = {}) {
        return new IrregularBitmapText(text, { fontName: fntErotixLight.font, ...style });
    },
    Medium(text = "", style: Style = {}) {
        return new BitmapText(text, { fontName: fntErotixLight.font, ...style });
    },
    MediumBold(text = "", style: Style = {}) {
        return new BitmapText(text, { fontName: fntErotix.font, ...style });
    },
    MediumBoldIrregular(text = "", style: Style = {}) {
        return new IrregularBitmapText(text, { fontName: fntErotix.font, ...style });
    },
    Large(text = "", style: Style = {}) {
        return new BitmapText(text, { fontName: fntGoodBoy.font, ...style });
    },
    LargeNusty(text = "", style: Style = {}) {
        return new IrregularBitmapText(text, { fontName: fntOldMaiden.font, ...style });
    },
    ScribbleDigits(text = "", style: Style = {}) {
        return new BitmapText(text, { fontName: fntScribdig.font, ...style });
    },
};
