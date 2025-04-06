import { Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { container } from "../../lib/pixi/container";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";

const txs = Tx.Characters.Bather.split({
    width: 275,
});

export function objBather() {
    const sprites = txs.map(tx => Sprite.from(tx).mixin(mxnBoilPivot));

    return container(...sprites).pivoted(153, 200);
}
