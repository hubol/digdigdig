import { DisplayObject, Graphics, IRendererRenderOptions, RenderTexture, Sprite, SpriteMaskFilter } from "pixi.js";
import { Tx } from "../../assets/textures";
import { Instances } from "../../lib/game-engine/instances";
import { sleepf } from "../../lib/game-engine/routines/sleep";
import { SceneLocal } from "../../lib/game-engine/scene-local";
import { areRectanglesOverlapping, IRectangle } from "../../lib/math/rectangle";
import { Rng } from "../../lib/math/rng";
import { container } from "../../lib/pixi/container";
import { renderer } from "../current-pixi-renderer";
import { scene } from "../globals";
import { mxnShadow } from "../mixins/mxn-shadow";
import { StepOrder } from "./step-order";

const groundStageMaskRenderTexture = RenderTexture.create({ width: renderer.width, height: renderer.height });
const groundStageRenderOptions: IRendererRenderOptions = {
    clear: true,
    renderTexture: groundStageMaskRenderTexture,
    skipUpdateTransform: false,
};

const deepestStageMaskRenderTexture = RenderTexture.create({ width: renderer.width, height: renderer.height });
const deepestStageRenderOptions: IRendererRenderOptions = {
    clear: true,
    renderTexture: deepestStageMaskRenderTexture,
    skipUpdateTransform: false,
};

export function objGroundStage() {
    const holes: IRectangle[] = [];

    const holesGfx = new Graphics();
    const maskObj = Sprite.from(groundStageMaskRenderTexture);

    function render() {
        maskObj.at(scene.camera);
        holesGfx.clear().beginFill(0xff0000).drawRect(0, 0, 2500, 2500).beginFill(0);
        for (const hole of holes) {
            holesGfx.drawRoundedRect(hole.x, hole.y, hole.width, hole.height, 3);
        }

        renderer.render(holesGfx.at(scene.camera, -1), groundStageRenderOptions);
    }

    const methods = {
        drawHole(x: number, y: number, width: number, height: number) {
            holes.push({ x, y, width, height });
        },
    };

    return container(maskObj, objShadows().zIndexed(10000))
        .merge({ methods })
        .step(render, StepOrder.AfterCamera)
        .filtered(new SpriteMaskFilter(maskObj))
        .autoSorted();
}

function objShadow() {
    return Sprite.from(Tx.CharacterShadow).anchored(0.5, 0.5).coro(function* (self) {
        while (true) {
            self.angle = Rng.int(2) * 180;
            self.scale.x = Rng.intp();
            self.scale.y = Rng.intp();
            yield sleepf(Rng.int(10, 30));
        }
    });
}

function objShadows() {
    return container<Sprite>()
        .step(self => {
            for (let i = 0; i < self.children.length; i++) {
                self.children[i].visible = false;
            }

            const needsShadowObjs = Instances(mxnShadow);
            for (let i = 0; i < needsShadowObjs.length; i++) {
                if (!self.children[i]) {
                    self.addChild(objShadow());
                }

                const needsShadowObj = needsShadowObjs[i];
                self.children[i].visible = true;
                self.children[i].at(needsShadowObj).tinted(needsShadowObj.mxnShadow.state.tint);
                self.children[i].texture = needsShadowObj.mxnShadow.controls.size === "normal"
                    ? Tx.CharacterShadow
                    : Tx.CharacterShadowSmall;
            }
        });
}

export function objDeepestStage() {
    const holesObj = container(new Graphics().beginFill(0xff0000).drawRect(0, 0, 2500, 2500));

    const maskObj = Sprite.from(deepestStageMaskRenderTexture);

    function render() {
        maskObj.at(scene.camera);
        renderer.render(holesObj.at(scene.camera, -1), deepestStageRenderOptions);
    }

    const methods = {
        drawHole(x: number, y: number, width: number, height: number) {
            Sprite.from(Tx.Dig.Hole).anchored(0.5, 0.5).at(x + width / 2, y + height / 2).sized(
                width * 0.9,
                height * 0.9,
            ).tinted(0).angled(Rng.int(4) * 90).show(holesObj);
        },
    };

    return container(
        maskObj,
        new Graphics().beginFill(0x312410).drawRect(0, 0, 2500, 2500).zIndexed(-1000),
        new Graphics().beginFill(0x775234).drawRect(0, 0, 2500, 2500).zIndexed(-1000).filtered(
            new SpriteMaskFilter(maskObj),
        ),
    )
        .merge({ methods })
        .step(render, StepOrder.AfterCamera)
        .autoSorted();
}

export const CtxHoles = new SceneLocal(() => {
    const holeRectangles: IRectangle[] = [];

    const object = {
        digHole(x: number, y: number, width: number, height: number) {
            holeRectangles.push({ x, y, width, height });
            scene.groundStage.methods.drawHole(x, y, width, height);
            scene.deepestStage.methods.drawHole(x, y, width, height);
        },
        holeRectangles,
    };

    return object;
});

export function mxnStaticAffectedByHoles(obj: DisplayObject) {
    const state = {
        coverageUnit: 0,
    };

    function updateState(count: number) {
        const bounds = obj.getWorldBounds();

        // Let's try to skip
        if (count > 0 && count < CtxHoles.value.holeRectangles.length) {
            let noOverlapCount = 0;

            for (
                let i = CtxHoles.value.holeRectangles.length - 1;
                i >= CtxHoles.value.holeRectangles.length - count;
                i--
            ) {
                const rect = CtxHoles.value.holeRectangles[i];
                if (!areRectanglesOverlapping(bounds, rect)) {
                    noOverlapCount++;
                }
                else {
                    break;
                }
            }

            if (noOverlapCount === count) {
                return;
            }
        }

        const availableArea = bounds.width * bounds.height;

        // Deranged implementation inspired by this article
        // https://www.construct.net/en/tutorials/calculating-rectangular-862

        // Find hole rectangles that overlap with this
        // and reduce them only to their overlap
        const overlappingRectangles = CtxHoles.value.holeRectangles
            .filter(rect => areRectanglesOverlapping(rect, bounds))
            .map(rect => {
                const x0 = Math.max(rect.x, bounds.x);
                const y0 = Math.max(rect.y, bounds.y);
                const x1 = Math.min(rect.x + rect.width, bounds.x + bounds.width);
                const y1 = Math.min(rect.y + rect.height, bounds.y + bounds.height);

                return {
                    x0,
                    y0,
                    x1,
                    y1,
                };
            });

        const xCoords = [...new Set(overlappingRectangles.flatMap(rect => [rect.x0, rect.x1]))].sort();
        const yCoords = [...new Set(overlappingRectangles.flatMap(rect => [rect.y0, rect.y1]))].sort();

        const usedCells: boolean[][] = [];

        for (const rectangle of overlappingRectangles) {
            const xIndex0 = xCoords.indexOf(rectangle.x0);
            const yIndex0 = yCoords.indexOf(rectangle.y0);
            const xIndex1 = xCoords.indexOf(rectangle.x1);
            const yIndex1 = yCoords.indexOf(rectangle.y1);

            for (let x = xIndex0; x < xIndex1; x++) {
                for (let y = yIndex0; y < yIndex1; y++) {
                    if (!usedCells[x]) {
                        usedCells[x] = [];
                    }
                    usedCells[x][y] = true;
                }
            }
        }

        let coverageArea = 0;

        for (let i = 0; i < xCoords.length - 1; i++) {
            if (!usedCells[i]) {
                continue;
            }

            const width = xCoords[i + 1] - xCoords[i];
            for (let j = 0; j < yCoords.length - 1; j++) {
                if (usedCells[i][j]) {
                    const height = yCoords[j + 1] - yCoords[j];
                    coverageArea += width * height;
                }
            }
        }

        state.coverageUnit = coverageArea / availableArea;
    }

    return obj
        .merge({ mxnStaticAffectedByHoles: { state } })
        .coro(function* () {
            let length = 0;
            while (true) {
                yield () => CtxHoles.value.holeRectangles.length !== length;
                updateState(CtxHoles.value.holeRectangles.length - length);
                length = CtxHoles.value.holeRectangles.length;
            }
        });
}
