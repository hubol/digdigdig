import { Container, Graphics } from "pixi.js";
import { AsshatTicker } from "../../../lib/game-engine/asshat-ticker";
import { SceneStack } from "../../../lib/game-engine/scene-stack";
import { TickerContainer } from "../../../lib/game-engine/ticker-container";
import { Logging } from "../../../lib/logging";
import { merge } from "../../../lib/object/merge";
import { container } from "../../../lib/pixi/container";
import { renderer } from "../../current-pixi-renderer";
import { forceGameLoop } from "../../globals";
import { objCamera } from "../../objects/obj-camera";
import { objDeepestStage, objGroundStage } from "../../objects/obj-ground-stage";
import { objPerspectiveStage } from "../../objects/obj-perspective-stage";
import { IguaLayers } from "../igua-layers";
import { ZIndex } from "./z-index";

interface IguaSceneMeta {
    useGameplay: boolean;
}

function createIguaScene(layers: IguaLayers, source: Function, meta: IguaSceneMeta) {
    const ticker = new AsshatTicker();
    const root = layers.scene.addChild(new TickerContainer(ticker, false).named(`Scene: ${source.name}`));

    // Probably redundant
    const background = new Container().named("Background");
    const parallaxStage = new Container().named("Parallax Stage");
    //

    const perspectiveStage = objPerspectiveStage().named("Perspective Stage").zIndexed(ZIndex.PerspectiveStage);
    const groundStage = objGroundStage().named("Ground Stage");
    const buriedStage = new Container().named("Buried Stage").autoSorted();
    const deepestStage = objDeepestStage().named("Deepest Stage");

    const stage = new Container().named("Stage");
    stage.sortableChildren = true;

    const earthStage = container(deepestStage, buriedStage, groundStage).named("Earth Stage").zIndexed(-10000000);
    earthStage.show(stage);

    perspectiveStage.show(stage);

    const camera = objCamera();

    root.addChild(background, parallaxStage, stage, camera);

    const backgroundGfx = new Graphics().tinted(0x000000).beginFill(0xffffff).drawRect(
        0,
        0,
        renderer.width,
        renderer.height,
    ).show(background);

    return {
        root,
        source,
        parallaxStage,
        stage,
        groundStage,
        buriedStage,
        deepestStage,
        perspectiveStage,
        camera,
        ticker,
        level: {
            width: renderer.width,
            height: renderer.height,
        },
        style: {
            get backgroundTint() {
                return backgroundGfx.tint as number;
            },
            set backgroundTint(tint: number) {
                backgroundGfx.tint = tint;
            },
        },
    };
}

export type IguaScene = ReturnType<typeof createIguaScene>;

export class IguaSceneStack extends SceneStack<IguaSceneMeta, IguaScene> {
    constructor(
        private readonly _layers: IguaLayers,
        private readonly _setScene: (scene: IguaScene) => void,
    ) {
        super();
        console.log(...Logging.componentArgs(this));
    }

    protected convert<T>(populateSceneFn: () => T, meta: IguaSceneMeta) {
        const iguaScene = createIguaScene(this._layers, populateSceneFn, meta);

        return merge(iguaScene, {
            populateScene: populateSceneFn,
        });
    }

    protected dispose(scene: IguaScene): void {
        scene.root.destroy();
    }

    protected onScenesModified(): void {
        for (let i = 0; i < this.scenes.length - 1; i += 1) {
            this.scenes[i].root.visible = false;
        }

        const scene = this.scenes.last;

        if (!scene) {
            return;
        }

        scene.root.visible = true;
        this._setScene(scene);
        forceGameLoop();
    }
}
