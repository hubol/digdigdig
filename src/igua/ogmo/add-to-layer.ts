import { DisplayObject } from "pixi.js";
import { Logger } from "../../lib/game-engine/logger";
import { ZIndex } from "../core/scene/z-index";
import { scene } from "../globals";

export function ogmoAddToLayer(obj: DisplayObject, layerName: string) {
    if (obj.parent) {
        return;
    }

    if (layerName === "DiggableEntities") {
        obj.zIndex = 1;
        obj.show(scene.groundStage);
    }
    else if (layerName === "PerspectiveDecals" || layerName === "PerspectiveEntities") {
        obj.show(scene.perspectiveStage);
    }
    else if (layerName === "AboveGroundDecals") {
        obj.show(scene.groundStage);
    }
    else if (layerName === "AcreEntities") {
        obj.zIndex = -5;
        obj.show(scene.groundStage);
    }
    else if (layerName === "GroundDecals") {
        obj.zIndex = -10;
        obj.show(scene.groundStage);
    }
    else if (layerName === "BuriedDecals") {
        obj.zIndex = -10;
        obj.show(scene.buriedStage);
    }
    else if (layerName === "BuriedEntities") {
        obj.zIndex = -20;
        obj.show(scene.buriedStage);
    }
    else if (layerName === "ParallaxDecals") {
        obj.show(scene.parallaxStage);
    }
    else if (layerName === "SolidEntities") {
        obj.show();
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
