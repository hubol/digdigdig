import { Graphics } from "pixi.js";
import { approachLinear, nlerp } from "../../lib/math/number";
import { Rng } from "../../lib/math/rng";
import { distance, vlerp } from "../../lib/math/vector";
import { VectorSimple, vnew } from "../../lib/math/vector-type";
import { Null } from "../../lib/types/null";
import { Key } from "../globals";
import { objCharacter } from "./obj-character";
import { generateNpcTints } from "./obj-npc";

const v = vnew();

export function objPlayer() {
    let lineObj = Null<ObjDrawnLine>();

    return objCharacter(generateNpcTints(Rng.int(10_000_000, 420_000_000)))
        .step(self => {
            v.at(0, 0);

            self.controls.upsideDownUnit = approachLinear(
                self.controls.upsideDownUnit,
                Key.isDown("Space") ? 1 : 0,
                0.05,
            );

            if (self.controls.upsideDownUnit <= 0 && lineObj) {
                lineObj.methods.finish();
                lineObj = null;
            }

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

function objDrawnLine() {
    const positions: VectorSimple[] = [];
    let previewPosition = Null<VectorSimple>();

    const gfx = new Graphics();

    function drawPositions() {
        gfx.clear().lineStyle(1, 0x000000).moveTo(positions[0].x, positions[0].y);
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
        finish() {
            const origin = getOriginOfPositions(positions);
            const previousPositions = positions.map(({ x, y }) => ({ x, y }));
            const targetPositions = getTargetPositions(positions, origin, 32);
            let factor = 0;

            gfx.step(() => {
                factor = approachLinear(factor, 1, 0.025);
                for (let i = 0; i < positions.length; i++) {
                    positions[i].x = previousPositions[i].x;
                    positions[i].y = previousPositions[i].y;
                    vlerp(positions[i], targetPositions[i], factor);
                }
                drawPositions();
            });
        },
    };

    return gfx.merge({ methods });
}

function getOriginOfPositions(positions: VectorSimple[]) {
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

    return {
        x: nlerp(minX, maxX, 0.5),
        y: nlerp(minY, maxY, 0.5),
    };
}

function getTargetPositions(positions: VectorSimple[], origin: VectorSimple, radius: number) {
    const targetPositions: VectorSimple[] = [];

    for (const position of positions) {
        v.at(position).add(origin, -1).normalize();
        const targetPosition = vnew(origin);
        if (Math.abs(v.x) > 0.5) {
            targetPosition.x += radius * Math.sign(v.x);
            targetPosition.y += radius * Math.min(1, Math.abs(v.y * 1.3)) * Math.sign(v.y);
        }
        else {
            targetPosition.x += radius * Math.min(1, Math.abs(v.x * 1.3)) * Math.sign(v.x);
            targetPosition.y += radius * Math.sign(v.y);
        }
        targetPositions.push(targetPosition);
    }

    return targetPositions;
}

type ObjDrawnLine = ReturnType<typeof objDrawnLine>;
