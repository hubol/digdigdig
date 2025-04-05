import { DisplayObject } from "pixi.js";
import { Logger } from "../../lib/game-engine/logger";
import { ZIndex } from "../core/scene/z-index";
import { scene } from "../globals";

export function ogmoAddToLayer(obj: DisplayObject, layerName: string) {
    if (obj.parent) {
        return;
    }

    if (layerName === "AboveGroundDecals") {
        obj.show(scene.groundStage);
    }
    else if (layerName === "GroundDecals") {
        obj.zIndex = -1;
        obj.show(scene.groundStage);
    }
    else if (layerName === "BuriedDecals") {
        obj.show(scene.buriedStage);
    }
    else if (layerName === "ParallaxDecals") {
        obj.show(scene.parallaxStage);
    }

    if (!obj.parent) {
        const zIndex = ZIndex[layerName];
        if (zIndex === undefined) {
            Logger.logMisconfigurationError(
                "ogmoAddToLayer",
                new Error("No ZIndex enumeration for layer name: " + layerName),
            );
        }
        else {
            obj.zIndex = zIndex;
        }
        obj.show();
    }
}
