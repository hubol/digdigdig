import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { scene } from "../globals";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { mxnBoilScaleXY } from "../mixins/mxn-boil-scale-xy";
import { mxnNpc } from "../mixins/mxn-npc";
import { objBather } from "../objects/obj-bather";
import { objEvilSpawner } from "../objects/obj-evil-spawner";
import { createPlayerObj } from "../objects/obj-player";

export function scnWorld() {
    const lvl = Lvl.World();
    createPlayerObj().at(lvl.PlayerStartMarker);

    // Water line
    lvl.WaterLineGroup.children.forEach(obj => obj.mixin(mxnBoilPivot));

    // Northern goon prize
    lvl.NorthernGoon.handles("mxnEnemy:died", () => lvl.NorthernGoonPrize.dispatch("objTreasurePrize:reward"));

    // Northwest goon blocking tic-tac-toe
    lvl.NorthwestWallDecal.mixin(mxnBoilScaleXY);
    lvl.NorthwesternGoon.handles("mxnEnemy:died", () => {
        lvl.NorthwestWallDecal.destroy();
        lvl.NorthwestWall.destroy();
    });

    // Tic-tac-toe
    scene.stage.coro(function* () {
        yield () =>
            (lvl.TicTacToeSpot00.isDug && lvl.TicTacToeSpot10.isDug && lvl.TicTacToeSpot20.isDug)
            || (lvl.TicTacToeSpot01.isDug && lvl.TicTacToeSpot11.isDug && lvl.TicTacToeSpot21.isDug)
            || (lvl.TicTacToeSpot02.isDug && lvl.TicTacToeSpot12.isDug && lvl.TicTacToeSpot22.isDug)
            || (lvl.TicTacToeSpot00.isDug && lvl.TicTacToeSpot01.isDug && lvl.TicTacToeSpot02.isDug)
            || (lvl.TicTacToeSpot10.isDug && lvl.TicTacToeSpot11.isDug && lvl.TicTacToeSpot12.isDug)
            || (lvl.TicTacToeSpot20.isDug && lvl.TicTacToeSpot21.isDug && lvl.TicTacToeSpot22.isDug)
            || (lvl.TicTacToeSpot00.isDug && lvl.TicTacToeSpot11.isDug && lvl.TicTacToeSpot22.isDug)
            || (lvl.TicTacToeSpot20.isDug && lvl.TicTacToeSpot11.isDug && lvl.TicTacToeSpot02.isDug);

        lvl.TicTacToePrize.dispatch("objTreasurePrize:reward");
    });

    // Evil
    const evilSpawnerObj = objEvilSpawner().at(lvl.EvilSpawnerMarker).show();
    lvl.EvilSpawnerTreasure.handles("objTreasure:collected", () => evilSpawnerObj.destroy());

    // Bather
    objBather().at(lvl.BatherMarker).show(scene.perspectiveStage);
    lvl.BatherRegion.mixin(mxnNpc, function* (api) {
        api.setMessage("Those goons to the north stole my soap.");
    });

    // Fisherman
    lvl.FishingRodInUse.mixin(mxnBoilPivot).visible = false;
    lvl.FishermanCharacter.mixin(mxnNpc, function* (api) {
        api.setMessage("I want to try fishing.");
        yield* api.receiveTreasureFromPlayer("FishingPole");
        yield* api.givePlayerTreasure("Tea");
        api.setMessage("Thanks mothafucka");
        lvl.FishingRodInUse.visible = true;
        lvl.FishermanCharacter.at(lvl.FishermanCompleteMarker);
        lvl.FishermanCharacter.controls.facingDirection = "east";
    });
}
