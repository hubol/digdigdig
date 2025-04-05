import { Graphics, Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { approachLinear } from "../../lib/math/number";
import { RgbInt } from "../../lib/math/number-alias-types";
import { Rng } from "../../lib/math/rng";
import { container } from "../../lib/pixi/container";
import { MapRgbFilter } from "../../lib/pixi/filters/map-rgb-filter";

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

interface ObjCharacterArgs {
    tint0: RgbInt;
    tint1: RgbInt;
    tint2: RgbInt;
}

export function objCharacter(args: ObjCharacterArgs) {
    const controls = {
        facingDirection: <FacingDirection> "south",
        pedometer: 0,
    };

    const faceMaskObj = new Graphics().beginFill(0xff0000).drawEllipse(50, 71, 38, 23);

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
        .masked(faceMaskObj);

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

    const underwearMaskObj = new Graphics().beginFill(0xff0000).drawRect(26, 111, 49, 13);

    const lowerBodyObj = container(
        Sprite.from(txTorso),
        Sprite.from(txFootLeft).step(self =>
            self.y = controls.pedometer === 0 ? 0 : (Math.round(Math.sin(controls.pedometer * Math.PI) - 1) * 6)
        ),
        Sprite.from(txFootRight).step(self =>
            self.y = controls.pedometer === 0 ? 0 : (Math.round(Math.cos(controls.pedometer * Math.PI) - 1) * 6)
        ),
        underwearMaskObj,
        Sprite.from(txUnderwearFront).step(self => {
            let targetX = 0;

            if (controls.facingDirection === "east") {
                targetX = 2;
            }
            else if (controls.facingDirection === "west") {
                targetX = -2;
            }

            const nextTexture = controls.facingDirection === "north" ? txUnderwearBack : txUnderwearFront;

            if (self.texture !== nextTexture) {
                self.x = targetX;
            }
            else if (Rng.float() > 0.25) {
                self.x = approachLinear(self.x, targetX, 1);
            }

            self.texture = nextTexture;
        })
            .masked(underwearMaskObj),
    ).step(self =>
        self.y = controls.pedometer === 0 ? 0 : (Math.round(Math.sin((controls.pedometer + 1) * Math.PI) + 1) * 2)
    );

    const headObj = container(
        Sprite.from(txHead),
        faceObj,
        hatObj,
        faceMaskObj,
    ).step(self =>
        self.y = controls.pedometer === 0 ? 0 : (Math.round(Math.cos((controls.pedometer + 1) * Math.PI) + 1) * 2)
    );

    return container(lowerBodyObj, headObj)
        .merge({ controls })
        .filtered(new MapRgbFilter(args.tint0, args.tint1, args.tint2, 0xffffff));
}
