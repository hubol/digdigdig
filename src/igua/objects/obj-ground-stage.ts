import { Graphics, IRendererRenderOptions, RenderTexture, Sprite, SpriteMaskFilter } from "pixi.js";
import { Tx } from "../../assets/textures";
import { Instances } from "../../lib/game-engine/instances";
import { sleepf } from "../../lib/game-engine/routines/sleep";
import { IRectangle } from "../../lib/math/rectangle";
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
        holesGfx.clear().beginFill(0xff0000).drawRect(0, 0, 2000, 2000).beginFill(0);
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
    const holesObj = container(new Graphics().beginFill(0xff0000).drawRect(0, 0, 2000, 2000));

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
        new Graphics().beginFill(0x312410).drawRect(0, 0, 2000, 2000).zIndexed(-1000),
        new Graphics().beginFill(0x775234).drawRect(0, 0, 2000, 2000).zIndexed(-1000).filtered(
            new SpriteMaskFilter(maskObj),
        ),
    )
        .merge({ methods })
        .step(render, StepOrder.AfterCamera)
        .autoSorted();
}
