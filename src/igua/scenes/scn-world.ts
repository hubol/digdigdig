import { DisplayObject } from "pixi.js";
import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { container } from "../../lib/pixi/container";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { mxnInhabitsAcre } from "../mixins/mxn-inhabits-acre";
import { createPlayerObj, playerObj } from "../objects/obj-player";
import { coroGivePlayerTreasure, TreasureKind } from "../objects/obj-treasure";

export function scnWorld() {
    const lvl = Lvl.World();
    createPlayerObj().at(lvl.PlayerStartMarker);
    lvl.WaterLineGroup.children.forEach(obj => obj.mixin(mxnBoilPivot));
    lvl.NorthernGoon.handles("mxnEnemy:died", (obj) => giveTreasure(obj, "DrillUpgradeSpeed"));
}

function giveTreasure(obj: DisplayObject, kind: TreasureKind) {
    container()
        .mixin(mxnInhabitsAcre)
        .at(obj)
        .coro(function* (self) {
            const inhabitsAcreObj = obj.is(mxnInhabitsAcre) ? obj : self;
            yield () => inhabitsAcreObj.mxnInhabitsAcre.methods.isPlayerInsideAcre() && !playerObj.state.isBusy;
            playerObj.state.isBusy = true;
            yield* coroGivePlayerTreasure(kind, self);
            playerObj.state.isBusy = false;
            self.destroy();
        }).show();
}
