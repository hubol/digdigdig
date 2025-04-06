import { DisplayObject } from "pixi.js";
import { Coro } from "../../lib/game-engine/routines/coro";
import { factor, interp, interpv } from "../../lib/game-engine/routines/interp";
import { sleep } from "../../lib/game-engine/routines/sleep";
import { layers } from "../globals";
import { playerObj } from "../objects/obj-player";
import { coroGivePlayerTreasure, createTreasureSpriteFromKind, TreasureKind } from "../objects/obj-treasure";
import { progress } from "../objects/progress";
import { mxnInhabitsAcre } from "./mxn-inhabits-acre";

export function mxnNpc(obj: DisplayObject, npcCoro: (api: NpcCoroApi) => Coro.Type) {
    const state = {
        message: "",
    };

    const mixedObj = obj
        .mixin(mxnInhabitsAcre)
        .coro(function* () {
            yield* npcCoro(api);
        })
        .step(() => {
            if (state.message !== "" && canPlayerInteract()) {
                // TODO npc talky instead of book
                layers.overlay.objects.readingBookObj.methods.show(state.message);
            }
        });

    const api: NpcCoroApi = {
        clearMessage() {
            state.message = "";
        },
        setMessage(message) {
            state.message = message;
        },
        *givePlayerTreasure(kind) {
            yield () => canPlayerInteract();
            playerObj.state.isBusy = true;
            yield* coroGivePlayerTreasure(kind, getBoundsCenter());
            playerObj.state.isBusy = false;
        },
        *receiveTreasureFromPlayer(kind) {
            yield () => canPlayerInteract() && progress.treasures.includes(kind);
            playerObj.state.isBusy = true;
            const sprite = createTreasureSpriteFromKind(kind).at([0, -80].add(playerObj)).show();
            yield interpv(sprite).factor(factor.sine).to(getBoundsCenter()).over(1000);
            yield sleep(300);
            yield interp(sprite, "alpha").steps(3).to(0).over(300);
            progress.treasures.removeFirst(kind);
            playerObj.state.isBusy = false;
        },
    };

    function getBoundsCenter() {
        return obj.getWorldBounds().getCenter();
    }

    function canPlayerInteract() {
        if (playerObj.state.isBusy || !mixedObj.mxnInhabitsAcre.methods.isPlayerInsideAcre()) {
            return false;
        }

        const objToTest = obj.is(mxnPossiblyNpc) ? obj.mxnPossiblyNpc.objects.talkBoxObj : obj;
        return objToTest.collides(playerObj.objects.npcTalkBoxObj);
    }

    return mixedObj;
}

interface NpcCoroApi {
    clearMessage(): void;
    setMessage(message: string): void;
    receiveTreasureFromPlayer(kind: TreasureKind): Coro.Type;
    givePlayerTreasure(kind: TreasureKind): Coro.Type;
}

export function mxnPossiblyNpc(obj: DisplayObject, talkBoxObj: DisplayObject) {
    return obj
        .merge({ mxnPossiblyNpc: { objects: { talkBoxObj } } });
}
