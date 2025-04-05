import { Graphics, IRendererOptions, IRendererRenderOptions, Rectangle, RenderTexture, Sprite, SpriteMaskFilter } from "pixi.js";
import { IRectangle } from "../../lib/math/rectangle";
import { container } from "../../lib/pixi/container";
import { renderer } from "../current-pixi-renderer";

const renderTexture = RenderTexture.create({ width: renderer.width, height: renderer.height });
const renderOptions: IRendererRenderOptions = { clear: true, renderTexture };

export function objGroundStage() {
    const holes: IRectangle[] = [];

    const holesGfx = new Graphics();
    const maskObj = Sprite.from(renderTexture);

    function render() {
        holesGfx.clear().beginFill(0xff0000).drawRect(0, 0, 2000, 2000).beginFill(0);
        for (const hole of holes) {
            holesGfx.drawRect(hole.x, hole.y, hole.width, hole.height);
        }

        renderer.render(holesGfx, renderOptions);
    }

    render();

    const methods = {
        drawHole(x: number, y: number, width: number, height: number) {
            holes.push({ x, y, width, height });

            render();
        },
    };

    return container(maskObj).merge({ methods }).filtered(new SpriteMaskFilter(maskObj));
}
