import { Graphics } from "pixi.js";
import { Sfx } from "../../assets/sounds";
import { KeyCode } from "../../lib/browser/key-listener";
import { Instances } from "../../lib/game-engine/instances";
import { factor, interp, interpv } from "../../lib/game-engine/routines/interp";
import { sleep, sleepf } from "../../lib/game-engine/routines/sleep";
import { approachLinear, nlerp } from "../../lib/math/number";
import { RgbInt } from "../../lib/math/number-alias-types";
import { distance, vlerp } from "../../lib/math/vector";
import { VectorSimple, vnew } from "../../lib/math/vector-type";
import { container } from "../../lib/pixi/container";
import { Null } from "../../lib/types/null";
import { ZIndex } from "../core/scene/z-index";
import { Key, scene } from "../globals";
import { objBlock } from "./obj-block";
import { objCharacter, ObjCharacterArgs } from "./obj-character";
import { CtxHoles } from "./obj-ground-stage";
import { generateObjCharacterArgs } from "./obj-npc";
import { progress } from "./progress";

const v = vnew();
const v1 = vnew();

export let playerCharacterArgs = generateObjCharacterArgs();

export function setPlayerCharacterArgs(args: ObjCharacterArgs) {
    playerCharacterArgs = args;
}

function objPlayer() {
    let lineObj = Null<ObjDrawnLine>();
    let expectJustWentDownToDrill = true;
    const lastGoodPosition = vnew(0, 0);

    // TODO Deep-merge would be nice here
    // const controls = {
    //     isBusy: false,
    // }

    const consts = {
        startPosition: vnew(),
    };

    function* coroDie() {
        yield () => !state.isBusy;
        maybeFinishLine();
        obj.objects.mapRgbFilter.update(0x202020, 0x909090, 0xd0d0d0);
        state.isBusy = true;
        state.isDead = true;

        yield interp(obj.controls, "upsideDownUnit").to(1).over(300);

        const rotateObj = container()
            .coro(function* () {
                const t = 300;
                while (true) {
                    obj.controls.facingDirection = "north";
                    yield sleep(t);
                    obj.controls.facingDirection = "east";
                    yield sleep(t);
                    obj.controls.facingDirection = "south";
                    yield sleep(t);
                    obj.controls.facingDirection = "west";
                    yield sleep(t);
                }
            })
            .show();

        Sfx.PlayerRespawn.play();
        yield interpv(obj).factor(factor.sine).to(consts.startPosition).over(5000);
        rotateObj.destroy();
        yield sleep(300);
        obj.controls.facingDirection = "south";

        progress.life = progress.lifeMaximum;
        progress.deaths += 1;

        obj.objects.mapRgbFilter.update(
            playerCharacterArgs.tint0,
            playerCharacterArgs.tint1,
            playerCharacterArgs.tint2,
        );
        state.isBusy = false;
        state.isDead = false;
    }

    const methods = {
        die() {
            obj.coro(coroDie);
        },
    };

    const state = {
        isBusy: false,
        isDead: false,
    };

    function justWentDown(code: KeyCode) {
        return !state.isBusy && Key.justWentDown(code);
    }

    function isDown(code: KeyCode) {
        return !state.isBusy && Key.isDown(code);
    }

    function maybeFinishLine() {
        if (!lineObj) {
            return;
        }
        lineObj.methods.finish(obj.mxnShadow.state.tint, progress.maxHoleRadius);
        lineObj = null;
    }

    const drillSound = Sfx.PlayerDrill.gain(0).loop(true).playInstance();

    const obj = objCharacter(playerCharacterArgs)
        .merge({ state, methods })
        .step(self => {
            self.controls.isNude = progress.upgrades.nude;

            if (state.isDead) {
                // Just in case
                drillSound.linearRamp("gain", 0, 0.2);
                return;
            }

            if (!self.objects.feetHitboxObj.collidesOne(Instances(objBlock))) {
                lastGoodPosition.at(self);
            }

            const attemptingToDrill = (justWentDown("Space") || (!expectJustWentDownToDrill && isDown("Space")))
                && progress.energy > 0;

            if (attemptingToDrill) {
                progress.firsts.everDrilled = true;
            }

            expectJustWentDownToDrill = !attemptingToDrill;

            let energyConsumption = 0;

            self.controls.upsideDownUnit = approachLinear(
                self.controls.upsideDownUnit,
                attemptingToDrill ? 1 : 0,
                0.05,
            );

            const isInNormalMode = self.controls.upsideDownUnit <= 0;
            const isInDrillMode = self.controls.upsideDownUnit >= 1;

            if (isInNormalMode) {
                maybeFinishLine();
            }

            v.at(0, 0);

            if (isDown("ArrowUp")) {
                v.add(0, -1);
            }
            if (isDown("ArrowDown")) {
                v.add(0, 1);
            }
            if (isDown("ArrowLeft")) {
                v.add(-1, 0);
            }
            if (isDown("ArrowRight")) {
                v.add(1, 0);
            }

            if (!v.isZero) {
                if (isInDrillMode) {
                    energyConsumption = 1;
                }
                let speed = 1;
                if (isInDrillMode) {
                    speed = progress.drillingMovementSpeed;
                }
                else if (isInNormalMode) {
                    speed = 2;
                }
                v.normalize().scale(speed);
            }

            if (!v.isZero && isInNormalMode) {
                const previous = self.controls.pedometer;
                self.controls.pedometer += 0.1;

                const divisor = Math.PI / 2;
                if (Math.floor(previous / divisor) !== Math.floor(self.controls.pedometer / divisor)) {
                    self.play(Sfx.PlayerStep0.rate(0.9, 1.1));
                }
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

            const previousX = self.x;
            const previousY = self.y;

            const horizontalOk = !self.objects.feetHitboxObj.collidesOne(Instances(objBlock), v1.at(v.x, 0));
            const verticalOk = !self.objects.feetHitboxObj.collidesOne(Instances(objBlock), v1.at(0, v.y));
            if (!horizontalOk && !verticalOk) {
                self.at(lastGoodPosition);
            }
            else if (horizontalOk && verticalOk) {
                self.add(v);
            }
            else if (horizontalOk) {
                self.x += v.x;
            }
            else if (verticalOk) {
                self.y += v.y;
            }

            if (horizontalOk || verticalOk) {
                self.x = Math.max(0, Math.min(self.x, scene.level.width));
                self.y = Math.max(0, Math.min(self.y, scene.level.height));
            }

            if (previousX === self.x && previousY === self.y) {
                energyConsumption = 0;
            }

            if (isInDrillMode) {
                if (!lineObj) {
                    lineObj = objDrawnLine().zIndexed(ZIndex.DrillPen).show();
                }

                const { x, y } = self.objects.hatTipObj.getWorldBounds();
                lineObj.methods.push(x, y);
            }

            if (attemptingToDrill) {
                progress.energy = Math.max(0, progress.energy - energyConsumption);
                if (progress.energy === 0) {
                    progress.energyBlockedSteps = progress.energyBlockedStepsMaximum;
                }
            }
            else if (progress.energyBlockedSteps > 0) {
                progress.energyBlockedSteps = Math.max(0, progress.energyBlockedSteps - 1);
            }
            else if (isInNormalMode) {
                progress.energy = Math.min(progress.energy + 1, progress.energyMaximum);
            }

            if (attemptingToDrill) {
                drillSound.linearRamp("gain", 1, 0.5);
                const rate = 2 - (progress.energy / progress.energyMaximum);
                drillSound.linearRamp("rate", rate, 0.05);
            }
            else {
                drillSound.linearRamp("gain", 0, 0.5);
                drillSound.linearRamp("rate", 1, 0.5);
            }
        })
        .coro(function* (self) {
            while (true) {
                const previous = progress.life;
                yield () => progress.life !== previous;
                if (progress.life > previous) {
                    continue;
                }
                for (let i = 0; i < 3; i++) {
                    self.visible = false;
                    yield sleepf(5);
                    self.visible = true;
                    yield sleepf(8);
                }
            }
        })
        .coro(function* (self) {
            consts.startPosition.at(self);
        })
        .show(scene.perspectiveStage);

    return obj;
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
        finish(tint: RgbInt, maxRadius: number) {
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
                obj.play(Sfx.PlayerLineCorrectionStep0.rate(0.9, 1.1));
                yield interp(finishState, "factor").steps(4).to(1).over(300 * progress.holeCreationDeltaTime);
                const solidObj = new Graphics()
                    .beginFill(0xffffff)
                    .drawRect(0, 0, radius * 2, radius * 2)
                    .scaled(0, 0)
                    .at(origin)
                    .add(radius, radius)
                    .tinted(0)
                    .show(obj);
                obj.play(Sfx.PlayerLineCorrectionStep1.rate(0.9, 1.1));
                yield interpv(solidObj.scale).to(-1, -1).over(300 * progress.holeCreationDeltaTime);
                gfx.destroy();
                obj.play(Sfx.PlayerCreateHole.rate(0.9, 1.1));
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
