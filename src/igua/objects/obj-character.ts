import { Graphics, Sprite } from "pixi.js";
import { Tx } from "../../assets/textures";
import { approachLinear, nlerp } from "../../lib/math/number";
import { RgbInt } from "../../lib/math/number-alias-types";
import { Rng } from "../../lib/math/rng";
import { container } from "../../lib/pixi/container";
import { MapRgbFilter } from "../../lib/pixi/filters/map-rgb-filter";
import { mxnPossiblyNpc } from "../mixins/mxn-npc";
import { mxnShadow } from "../mixins/mxn-shadow";

const [
    txHead,
    txTorso,
    txFootLeft,
    txFootRight,
    txUnderwearFront,
    txUnderwearBack,
    txFaceClown,
    txHatPointed,
    txFootRightAngled,
    txFootLeftAngled,
] = Tx.Character.split({ width: 100 });

const [txButt, txPenis, txPenisUpsideDown] = Tx.CharacterNude.split({ width: 100 });

type FacingDirection = "north" | "east" | "south" | "west";

export interface ObjCharacterArgs {
    tint0: RgbInt;
    tint1: RgbInt;
    tint2: RgbInt;
}

export function objCharacter(args: ObjCharacterArgs) {
    const controls = {
        isNude: false,
        upsideDownUnit: 0,
        facingDirection: <FacingDirection> "south",
        pedometer: 0,
    };

    const faceMaskObj = new Graphics().beginFill(0xff0000).drawEllipse(50, 71, 38, 23);

    const faceObj = Sprite.from(txFaceClown).step(self => {
        let targetX = 0;
        const upsideDownFactor = controls.upsideDownUnit > 0.5 ? -1 : 1;

        if (controls.facingDirection === "east") {
            targetX = 10 * upsideDownFactor;
        }
        else if (controls.facingDirection === "west") {
            targetX = -10 * upsideDownFactor;
        }
        else if (controls.facingDirection === "north") {
            targetX = (Math.sign(self.x) || Rng.intp()) * 74;
        }

        if (Math.abs(self.x) > 70 && targetX !== 0) {
            self.x = Math.sign(targetX) * Math.abs(self.x);
        }

        if (Rng.float() > 0.5) {
            self.x = approachLinear(self.x, targetX, 1 + Math.abs(self.x - targetX) * 0.3);
        }
    })
        .masked(faceMaskObj);

    const hatTipObj = new Graphics().beginFill(0xff0000).drawRect(49, 13, 1, 1).invisible();

    const hatObj = container(
        Sprite.from(txHatPointed),
        hatTipObj,
    )
        .step(self => {
            let targetX = 0;

            if (controls.facingDirection === "east") {
                targetX = -5;
            }
            else if (controls.facingDirection === "west") {
                targetX = 5;
            }

            if (controls.upsideDownUnit > 0.5) {
                targetX *= -1;
            }

            if (Rng.float() > 0.67) {
                self.x = approachLinear(self.x, targetX, 1 + Math.abs(self.x - targetX) * 0.3);
            }
        });

    const underwearMaskObj = new Graphics().beginFill(0xff0000).drawRect(26, 108, 49, 20);

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

            if (controls.upsideDownUnit > 0.5) {
                targetX *= -1;
            }

            const txBack = controls.isNude ? txButt : txUnderwearBack;
            const txFront = controls.isNude
                ? (controls.upsideDownUnit > 0.5 ? txPenisUpsideDown : txPenis)
                : txUnderwearFront;

            const nextTexture = controls.facingDirection === "north" ? txBack : txFront;

            if (self.texture !== nextTexture) {
                self.x = targetX;
            }
            else if (Rng.float() > 0.25) {
                self.x = approachLinear(self.x, targetX, 1);
            }

            self.texture = nextTexture;
        })
            .masked(underwearMaskObj),
    )
        .merge({ offsetY: 0 })
        .pivoted(50, 105)
        .at(50, 105)
        .step(self =>
            self.y = self.pivot.y + self.offsetY
                + (controls.pedometer === 0 ? 0 : (Math.round(Math.sin((controls.pedometer + 1) * Math.PI) + 1) * 2))
        );

    const headObj = container(
        Sprite.from(txHead),
        faceObj,
        hatObj,
        faceMaskObj,
    )
        .merge({ offsetY: 0 })
        .pivoted(49, 74)
        .at(49, 74)
        .step(self =>
            self.y = self.pivot.y + self.offsetY
                + (controls.pedometer === 0 ? 0 : (Math.round(Math.cos((controls.pedometer + 1) * Math.PI) + 1) * 2))
        );

    let nextUpsideDownSpinDirection = Rng.intp();

    const feetHitboxObj = new Graphics().beginFill(0xff0000).drawRect(-15, -3, 30, 8).invisible();
    const bodyVulnerableBoxObj = new Graphics().beginFill(0xff0000).drawRect(-25, -82, 50, 70).invisible();
    const feetVulnerableBoxObj = new Graphics().beginFill(0x00ff00).drawRect(-30, -20, 60, 25).invisible();
    const npcTalkBoxObj = new Graphics().beginFill(0x00ff00).drawRect(-60, -70, 120, 75).invisible();

    const mapRgbFilter = new MapRgbFilter(args.tint0, args.tint1, args.tint2, 0xffffff);

    const objects = {
        bodyVulnerableBoxObj,
        feetVulnerableBoxObj,
        feetHitboxObj,
        hatTipObj,
        mapRgbFilter,
        npcTalkBoxObj,
    };

    const innerObj = container(lowerBodyObj, headObj)
        .filtered(mapRgbFilter)
        .pivoted(50, 140)
        .step(self => {
            self.pivot.y = controls.upsideDownUnit >= 1 ? 16 : 140;
            self.angle = controls.upsideDownUnit >= 1 ? 180 : 0;

            headObj.offsetY = 0;
            lowerBodyObj.offsetY = 0;

            headObj.angle = 0;
            lowerBodyObj.angle = 0;

            if (controls.upsideDownUnit <= 0 || controls.upsideDownUnit >= 1) {
                nextUpsideDownSpinDirection = Rng.intp();
                return;
            }

            if (controls.upsideDownUnit < 0.5) {
                const unit = controls.upsideDownUnit * 2;
                headObj.angle = Math.round((unit * 180 * nextUpsideDownSpinDirection) / 45) * 45;
                lowerBodyObj.offsetY = nlerp(0, -30, Math.round(unit * 4) / 4);
            }
            else {
                const unit = (controls.upsideDownUnit - 0.5) * 2;
                headObj.angle = 180;
                lowerBodyObj.angle = 180;

                headObj.offsetY = nlerp(0, 10, Math.round(unit * 4) / 4);
                lowerBodyObj.offsetY = nlerp(-30, -45, Math.round(unit * 4) / 4);
            }
        }, -1);

    return container(innerObj, bodyVulnerableBoxObj, feetVulnerableBoxObj, feetHitboxObj, npcTalkBoxObj)
        .mixin(mxnShadow, { hitboxObj: feetHitboxObj })
        .mixin(mxnPossiblyNpc, npcTalkBoxObj)
        .merge({ controls, objects })
        .step(self => {
            self.mxnShadow.controls.size = controls.upsideDownUnit > 0.5 ? "small" : "normal";
        }, -1);
}
