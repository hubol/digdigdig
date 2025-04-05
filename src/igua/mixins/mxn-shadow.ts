import { Container, DisplayObject, Graphics, Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { interpc } from "../../lib/game-engine/routines/interp";
import { sleepf } from "../../lib/game-engine/routines/sleep";
import { RgbInt } from "../../lib/math/number-alias-types";
import { AdjustColor } from "../../lib/pixi/adjust-color";
import { scene } from "../globals";

type MxnShadowSize = "normal" | "small";

export function mxnShadow(obj: Container, args: { hitboxObj?: DisplayObject }) {
    const controls = { size: <MxnShadowSize> "normal" };
    const state = { tint: 0x7E8F3E };

    if (!args.hitboxObj) {
        args.hitboxObj = new Graphics().beginFill(0xff0000).drawRect(-20, -6, 40, 12).invisible().show(obj);
    }

    return obj
        .merge({ mxnShadow: { controls, state } })
        .coro(function* () {
            while (true) {
                for (let i = scene.groundStage.children.length - 1; i >= 0; i--) {
                    const child = scene.groundStage.children[i];
                    if (canInfluenceShadow(child) && args.hitboxObj!.collides(child)) {
                        const targetTint = darken((child as Sprite).tint as number);
                        yield interpc(state, "tint").steps(4).to(targetTint).over(500);
                        break;
                    }
                    if (i % 60 === 0) {
                        yield sleepf(1);
                    }
                }
                yield sleepf(1);
            }
        })
        .track(mxnShadow);
}

function darken(tint: RgbInt) {
    if (!darkenedCache[tint]) {
        darkenedCache[tint] = AdjustColor.pixi(tint).saturate(0.025).darken(0.1).toPixi();
    }

    return darkenedCache[tint];
}

const darkenedCache: Record<RgbInt, RgbInt> = {};

function canInfluenceShadow(child: DisplayObject | undefined) {
    return child && "tint" in child && typeof child.tint === "number"
        && child.tint !== 0xffffff && child.zIndex === -10;
}
