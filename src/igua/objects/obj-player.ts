import { Graphics } from "pixi.js";
import { interp, interpv } from "../../lib/game-engine/routines/interp";
import { sleepf } from "../../lib/game-engine/routines/sleep";
import { approachLinear, nlerp } from "../../lib/math/number";
import { RgbInt } from "../../lib/math/number-alias-types";
import { distance, vlerp } from "../../lib/math/vector";
import { VectorSimple, vnew } from "../../lib/math/vector-type";
import { container } from "../../lib/pixi/container";
import { Null } from "../../lib/types/null";
import { Key } from "../globals";
import { objCharacter, ObjCharacterArgs } from "./obj-character";
import { CtxHoles } from "./obj-ground-stage";
import { generateObjCharacterArgs } from "./obj-npc";

const v = vnew();

let playerCharacterArgs = generateObjCharacterArgs();

export function setPlayerCharacterArgs(args: ObjCharacterArgs) {
    playerCharacterArgs = args;
}

function objPlayer() {
    let lineObj = Null<ObjDrawnLine>();

    return objCharacter(playerCharacterArgs)
        .step(self => {
            self.controls.upsideDownUnit = approachLinear(
                self.controls.upsideDownUnit,
                Key.isDown("Space") ? 1 : 0,
                0.05,
            );

            if (self.controls.upsideDownUnit <= 0 && lineObj) {
                lineObj.methods.finish(self.mxnShadow.state.tint);
                lineObj = null;
            }

            v.at(0, 0);

            if (self.controls.upsideDownUnit <= 0 || self.controls.upsideDownUnit >= 1) {
                if (Key.isDown("ArrowUp")) {
                    v.add(0, -1);
                }
                if (Key.isDown("ArrowDown")) {
                    v.add(0, 1);
                }
                if (Key.isDown("ArrowLeft")) {
                    v.add(-1, 0);
                }
                if (Key.isDown("ArrowRight")) {
                    v.add(1, 0);
                }
            }

            if (!v.isZero) {
                v.normalize().scale(2);
            }

            if (!v.isZero && self.controls.upsideDownUnit <= 0) {
                self.controls.pedometer += 0.1;
            }
            else {
                self.controls.pedometer = 0;
            }

            if (v.y < -0.4) {
                self.controls.facingDirection = "north";
            }
            else if (v.y > 0.4) {
                self.controls.facingDirection = "south";
            }
            else if (v.x > 0.4) {
                self.controls.facingDirection = "east";
            }
            else if (v.x < -0.4) {
                self.controls.facingDirection = "west";
            }

            self.add(v);

            if (self.controls.upsideDownUnit >= 1) {
                if (!lineObj) {
                    lineObj = objDrawnLine().zIndexed(-1).show();
                }

                const { x, y } = self.objects.hatTipObj.getWorldBounds();
                lineObj.methods.push(x, y);
            }
        });
}

export type ObjPlayer = ReturnType<typeof objPlayer>;

export let playerObj: ObjPlayer;

export function createPlayerObj() {
    return playerObj = objPlayer();
}

function objDrawnLine() {
    const positions: VectorSimple[] = [];
    let previewPosition = Null<VectorSimple>();

    const gfx = new Graphics();

    function drawPositions() {
        gfx.clear().lineStyle(1, 0x000000, 1, 0).moveTo(positions[0].x, positions[0].y);
        for (let i = 1; i < positions.length; i++) {
            gfx.lineTo(positions[i].x, positions[i].y);
        }
    }

    const methods = {
        push(x: number, y: number) {
            if (previewPosition === null) {
                previewPosition = { x, y };
            }
            else if (previewPosition.x === x && previewPosition.y === y) {
                return;
            }

            previewPosition.x = x;
            previewPosition.y = y;

            if (positions.length === 0 || distance(previewPosition, positions.last) > 5) {
                positions.push({ x: previewPosition.x, y: previewPosition.y });
            }

            drawPositions();

            gfx.lineTo(previewPosition.x, previewPosition.y);
        },
        finish(tint: RgbInt, maxRadius = 32) {
            const analysis = analyzePositions(positions);
            const origin = analysis.origin;
            const radius = Math.min(analysis.radius, maxRadius);

            const previousPositions = positions.map(({ x, y }) => ({ x, y }));
            const targetPositions = getTargetPositionsOrReject(positions, origin, radius);

            if (targetPositions === null) {
                // TODO reject sfx
                obj.destroy();
                return;
            }

            const finishState = {
                factor: 0,
            };

            gfx.step(() => {
                for (let i = 0; i < positions.length; i++) {
                    positions[i].x = previousPositions[i].x;
                    positions[i].y = previousPositions[i].y;
                    vlerp(positions[i], targetPositions[i], finishState.factor);
                }
                drawPositions();
            });

            obj.coro(function* () {
                yield interp(finishState, "factor").steps(4).to(1).over(300);
                const solidObj = new Graphics()
                    .beginFill(0xffffff)
                    .drawRect(0, 0, radius * 2, radius * 2)
                    .scaled(0, 0)
                    .at(origin)
                    .add(radius, radius)
                    .tinted(0)
                    .show(obj);
                yield interpv(solidObj.scale).to(-1, -1).over(300);
                gfx.destroy();
                CtxHoles.value.digHole(origin.x - radius, origin.y - radius, radius * 2, radius * 2);
                solidObj.tinted(tint);
                for (let i = 0; i < 4; i++) {
                    solidObj.visible = !solidObj.visible;
                    solidObj.alpha -= 0.2;
                    yield sleepf(6);
                }
                obj.destroy();
            });
        },
    };

    const obj = container(gfx);

    return obj.merge({ methods });
}

function analyzePositions(positions: VectorSimple[]) {
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;
    let maxX = Number.MIN_VALUE;
    let maxY = Number.MIN_VALUE;

    for (const position of positions) {
        minX = Math.min(minX, position.x);
        minY = Math.min(minY, position.y);
        maxX = Math.max(maxX, position.x);
        maxY = Math.max(maxY, position.y);
    }

    const origin = { x: nlerp(minX, maxX, 0.5), y: nlerp(minY, maxY, 0.5) };
    const radius = ((maxX - minX) / 2 + (maxY - minY) / 2) / 2;

    return {
        origin,
        radius,
    };
}

function getTargetPositionsOrReject(positions: VectorSimple[], origin: VectorSimple, radius: number) {
    const targetPositions: VectorSimple[] = [];

    let north = false;
    let east = false;
    let south = false;
    let west = false;

    for (const position of positions) {
        v.at(position).add(origin, -1).normalize();
        const targetPosition = vnew();
        if (Math.abs(v.x) > 0.5) {
            targetPosition.x = Math.sign(v.x);
            targetPosition.y = Math.min(1, Math.abs(v.y * 1.3)) * Math.sign(v.y);
        }
        else {
            targetPosition.x = Math.min(1, Math.abs(v.x * 1.3)) * Math.sign(v.x);
            targetPosition.y = Math.sign(v.y);
        }

        if (targetPosition.y === -1) {
            north = true;
        }
        else if (targetPosition.x === 1) {
            east = true;
        }
        else if (targetPosition.y === 1) {
            south = true;
        }
        else if (targetPosition.x === -1) {
            west = true;
        }

        targetPosition.scale(radius).add(origin);
        targetPositions.push(targetPosition);
    }

    if (north && east && south && west) {
        return targetPositions;
    }

    return null;
}

type ObjDrawnLine = ReturnType<typeof objDrawnLine>;
