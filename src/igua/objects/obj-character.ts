import { Graphics, Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { approachLinear } from "../../lib/math/number";
import { Rng } from "../../lib/math/rng";
import { container } from "../../lib/pixi/container";

const [
    txHead,
    txTorso,
    txFootLeft,
    txFootRight,
    txUnderwearFront,
    txUnderwearBack,
    txFaceClown,
    txHatPointed,
] = Tx.Character.split({ width: 100 });

type FacingDirection = "north" | "east" | "south" | "west";

export function objCharacter() {
    const controls = {
        facingDirection: <FacingDirection> "south",
        pedometer: 0,
    };

    const maskObj = new Graphics().beginFill(0xff0000).drawEllipse(50, 71, 38, 23);

    const faceObj = Sprite.from(txFaceClown).step(self => {
        let targetX = 0;

        if (controls.facingDirection === "east") {
            targetX = 10;
        }
        else if (controls.facingDirection === "west") {
            targetX = -10;
        }
        else if (controls.facingDirection === "north") {
            targetX = (Math.sign(self.x) || Rng.intp()) * 74;
        }

        if (Rng.float() > 0.5) {
            self.x = approachLinear(self.x, targetX, 1 + Math.abs(self.x - targetX) * 0.3);
        }
    })
        .masked(maskObj);

    const hatObj = Sprite.from(txHatPointed).step(self => {
        let targetX = 0;

        if (controls.facingDirection === "east") {
            targetX = -5;
        }
        else if (controls.facingDirection === "west") {
            targetX = 5;
        }

        if (Rng.float() > 0.67) {
            self.x = approachLinear(self.x, targetX, 1 + Math.abs(self.x - targetX) * 0.3);
        }
    });

    const lowerBodyObj = container(
        Sprite.from(txTorso),
        Sprite.from(txFootLeft),
        Sprite.from(txFootRight),
        Sprite.from(txUnderwearFront).step(self =>
            self.texture = controls.facingDirection === "north" ? txUnderwearBack : txUnderwearFront
        ),
    );

    const headObj = container(
        Sprite.from(txHead),
        faceObj,
        hatObj,
        maskObj,
    );

    return container(lowerBodyObj, headObj)
        .merge({ controls });
}
