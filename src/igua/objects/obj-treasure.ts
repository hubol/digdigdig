import { Sprite, Texture } from "pixi.js";
import { Tx } from "../../assets/textures";
import { factor, interpv, interpvr } from "../../lib/game-engine/routines/interp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { Integer } from "../../lib/math/number-alias-types";
import { VectorSimple } from "../../lib/math/vector-type";
import { container } from "../../lib/pixi/container";
import { alphaMaskFilter } from "../../lib/pixi/filters/alpha-mask-filter";
import { layers } from "../globals";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { mxnInhabitsAcre } from "../mixins/mxn-inhabits-acre";
import { mxnStaticAffectedByHoles } from "./obj-ground-stage";
import { playerObj } from "./obj-player";
import { Progress, progress } from "./progress";

const treasures = {
    "GoldIdol": { tx: Tx.Treasures.GoldenIdol, value: 100 },
    "Bone": { tx: Tx.Treasures.Bone, description: "Unfamiliar with this." },
    "Skull": { tx: Tx.Treasures.Skull, description: "Who left this here?" },
    "RingWithGreenStone": {
        tx: Tx.Treasures.RingWithGreenStone,
        description: "Green stone is worth money.",
        value: 100,
    },
    "DrillUpgrade0": {
        tx: Tx.Treasures.DrillUpgrade0,
        description: "Max EN. UP",
        progress: p => p.upgrades.drill.energy += 1,
    },
    "DrillUpgrade1": {
        tx: Tx.Treasures.DrillUpgrade1,
        description: "Max Hole Radius UP",
        progress: p => p.upgrades.drill.radius += 1,
    },
    "DrillUpgrade2": {
        tx: Tx.Treasures.DrillUpgrade2,
        description: "Drill Speed UP",
        progress: p => p.upgrades.drill.speed += 1,
    },
    "DrillUpgrade3": {
        tx: Tx.Treasures.DrillUpgrade3,
        description: "Drill Attack Power UP",
        progress: p => p.upgrades.drill.attack += 1,
    },
} satisfies Record<string, Treasure>;

interface Treasure {
    tx: Texture;
    description?: string;
    value?: Integer;
    progress?: (progress: Progress) => void;
}

type TreasureKind = keyof typeof treasures;

function createSprite(treasure: Treasure) {
    return Sprite.from(treasure.tx).anchored(0.5, 0.5);
}

export function objTreasure(kind: TreasureKind) {
    const treasure: Treasure = treasures[kind] ?? treasures.GoldIdol;

    const sprite = createSprite(treasure);
    const spriteMask = createSprite(treasure);
    const mysteryObj = container(Sprite.from(Tx.Dig.Mystery).anchored(0.5, 0.5).mixin(mxnBoilPivot)).filtered(
        alphaMaskFilter(spriteMask),
    );

    return container(sprite, spriteMask, mysteryObj)
        .mixin(mxnStaticAffectedByHoles, sprite)
        .mixin(mxnInhabitsAcre)
        .coro(function* (self) {
            yield () =>
                self.mxnStaticAffectedByHoles.state.coverageUnit >= 0.75
                && self.mxnInhabitsAcre.methods.isPlayerInsideAcre()
                && !playerObj.state.isBusy;

            playerObj.state.isBusy = true;
            self.visible = false;
            yield* coroGivePlayerTreasure(kind, self);
            self.destroy();
            playerObj.state.isBusy = false;
        });
}

/**
 * Claim the `playerObj.state.isBusy` lock before calling
 */
export function* coroGivePlayerTreasure(kind: TreasureKind, origin: VectorSimple) {
    const treasure: Treasure = treasures[kind] ?? treasures.GoldIdol;
    const obj = createSprite(treasure).at(origin).show();
    // TODO vfx
    yield sleep(500);
    yield interpvr(obj).factor(factor.sine).to([0, -100].add(playerObj)).over(1000);
    layers.overlay.objects.treasureMessageObj.methods.show(getMessage(treasure));
    yield sleep(2000);
    layers.overlay.objects.treasureMessageObj.methods.clear();
    applyTreasureToProgress(treasure);
    obj.destroy();
}

function getMessage(treasure: Treasure) {
    if (treasure.description) {
        return treasure.description;
    }
    if (treasure.value) {
        return "Worth money.";
    }
    return "Unknown purpose";
}

function applyTreasureToProgress(treasure: Treasure) {
    if (treasure.value) {
        progress.money += treasure.value;
    }
    treasure.progress?.(progress);
}
