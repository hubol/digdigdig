import { DisplayObject } from "pixi.js";

export function mxnInhabitsAcre(obj: DisplayObject) {
    const consts = {
        minX: 0,
        minY: 0,
        maxX: 500,
        maxY: 280,
        centerX: 250,
        centerY: 140,
    };

    const methods = {
        isInsideAcre() {
            return obj.x >= consts.minX && obj.y >= consts.minY && obj.x <= consts.maxX && obj.y <= consts.maxY;
        },
    };

    return obj
        .merge({ mxnInhabitsAcre: { consts, methods } })
        .coro(function* () {
            const minX = Math.floor(obj.x / 500) * 500;
            const minY = Math.floor(obj.y / 280) * 280;

            consts.minX = minX;
            consts.minY = minY;
            consts.maxX += minX;
            consts.maxY += minY;
            consts.centerX += minX;
            consts.centerY += minY;
        });
}
