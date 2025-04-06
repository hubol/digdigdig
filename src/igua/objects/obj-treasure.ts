import { Sprite, Texture } from "pixi.js";
import { Tx } from "../../assets/textures";
import { factor, interpv, interpvr } from "../../lib/game-engine/routines/interp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { Integer } from "../../lib/math/number-alias-types";
import { VectorSimple } from "../../lib/math/vector-type";
import { mxnInhabitsAcre } from "../mixins/mxn-inhabits-acre";
import { mxnStaticAffectedByHoles } from "./obj-ground-stage";
import { playerObj } from "./obj-player";
import { Progress } from "./progress";

const treasures = {
    "GoldIdol": { tx: Tx.Treasures.GoldenIdol, value: 100 },
} satisfies Record<string, Treasure>;

interface Treasure {
    tx: Texture;
    description?: string;
    value?: Integer;
    progress?: (progress: Progress) => void;
}

type TreasureKind = keyof typeof treasures;

export function objTreasure(kind: TreasureKind) {
    const treasure: Treasure = treasures[kind] ?? treasures.GoldIdol;
    return Sprite.from(treasure.tx)
        .anchored(0.5, 0.5)
        .mixin(mxnStaticAffectedByHoles)
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
    const obj = Sprite.from(treasure.tx).anchored(0.5, 0.5).at(origin).show();
    // TODO vfx
    yield sleep(500);
    yield interpvr(obj).factor(factor.sine).to([0, -100].add(playerObj)).over(1000);
    // TODO message
    yield sleep(1000);
    // TODO update progress
    obj.destroy();
}
