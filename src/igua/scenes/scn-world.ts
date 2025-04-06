import { DisplayObject, Sprite } from "pixi.js";
import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { Mzk } from "../../assets/music";
import { Sfx } from "../../assets/sounds";
import { holdf } from "../../lib/game-engine/routines/hold";
import { Jukebox } from "../core/igua-audio";
import { scene } from "../globals";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { mxnBoilScaleXY } from "../mixins/mxn-boil-scale-xy";
import { mxnNpc } from "../mixins/mxn-npc";
import { objBather } from "../objects/obj-bather";
import { objEvilSpawner } from "../objects/obj-evil-spawner";
import { createPlayerObj, playerObj } from "../objects/obj-player";
import { objSpider } from "../objects/obj-spider";
import { transitionToScene } from "./scn-choose-character";
import { scnFinalWorld } from "./scn-final-world";

export function scnWorld() {
    Jukebox.play(Mzk.World);

    const lvl = Lvl.World();
    createPlayerObj().at(lvl.PlayerStartMarker);

    // Water line
    lvl.WaterLineGroup.children.forEach(obj => obj.mixin(mxnBoilPivot));

    // Northern goon prize
    lvl.NorthernGoon.handles("mxnEnemy:died", () => lvl.NorthernGoonPrize.dispatch("objTreasurePrize:reward"));

    // Northwest goon blocking tic-tac-toe
    lvl.NorthwestWallDecal.mixin(mxnBoilScaleXY);
    lvl.NorthwesternGoon.handles("mxnEnemy:died", () => {
        Sfx.BlockageRemoved.play();
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
    const batherObj = objBather().at(lvl.BatherMarker).show(scene.perspectiveStage);
    lvl.BatherRegion.mixin(mxnNpc, function* (api) {
        api.setMessage("The goon to the north stole my soap.");
        yield* api.receiveTreasureFromPlayer("Soap");
        batherObj.state.hasSoap = true;
        yield* api.givePlayerTreasure("DrillUpgradeAttack");
        api.setMessage("Thanks! Now it's bubble time.");
    });

    lvl.NortheasternGoon.handles("mxnEnemy:died", () => lvl.NortheasternGoonPrize.dispatch("objTreasurePrize:reward"));

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

    // Southeastern goon
    lvl.SoutheasternGoon.handles("mxnEnemy:died", () => lvl.SoutheasternGoonPrize.dispatch("objTreasurePrize:reward"));

    // Spiders
    {
        let spiderKills = 0;

        function incrementSpiderKill() {
            spiderKills++;
            if (spiderKills >= 4) {
                lvl.SpiderPrize.dispatch("objTreasurePrize:reward");
            }
        }

        [lvl.SpiderMarker0, lvl.SpiderMarker1, lvl.SpiderMarker2, lvl.SpiderMarker3].forEach(markerObj =>
            objSpider().at(markerObj).handles("mxnEnemy:died", incrementSpiderKill)
        );

        lvl.GraveyardGroundskeeper.mixin(mxnNpc, function* (api) {
            api.setMessage("Devils have taken over to the west.");
            yield () => spiderKills >= 4;
            api.setMessage("Thanks for taking care of the devils!");
        });
    }

    // Final
    {
        setupFinalStep(lvl.FinalDecal0, lvl.FinalBlock0, lvl.FinalStep0Region);
        setupFinalStep(lvl.FinalDecal1, lvl.FinalBlock1, lvl.FinalStep1Region);
        setupFinalStep(lvl.FinalDecal2, lvl.FinalBlock2, lvl.FinalStep2Region);
        lvl.FinalRegion.coro(function* (self) {
            yield holdf(() => playerObj.objects.feetHitboxObj.collides(self), 30);
            transitionToScene(scnFinalWorld);
        });
    }
}

function setupFinalStep(decalObj: Sprite, blockObj: DisplayObject, regionObj: DisplayObject) {
    decalObj.mixin(mxnBoilScaleXY);
    regionObj.coro(function* () {
        yield holdf(() => playerObj.objects.feetHitboxObj.collides(regionObj), 30);
        blockObj.destroy();
        decalObj.destroy();
        Sfx.BlockageRemoved.play();
    });
}
