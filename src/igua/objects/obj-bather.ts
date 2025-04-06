import { Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { container } from "../../lib/pixi/container";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";

const txs = Tx.Characters.Bather.split({
    width: 275,
});

export function objBather() {
    const sprites = txs.map(tx => Sprite.from(tx).mixin(mxnBoilPivot));
    sprites.last.visible = false;

    const state = {
        get hasSoap() {
            return sprites.last.visible;
        },
        set hasSoap(value) {
            sprites.last.visible = value;
        },
    };

    return container(...sprites).merge({ state }).pivoted(153, 200);
}
