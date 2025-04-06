import { Graphics } from "pixi.js";
import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { EscapeTickerAndExecute } from "../../lib/game-engine/asshat-ticker";
import { interpv, interpvr } from "../../lib/game-engine/routines/interp";
import { sleep, sleepf } from "../../lib/game-engine/routines/sleep";
import { container } from "../../lib/pixi/container";
import { renderer } from "../current-pixi-renderer";
import { Key, layers, scene, sceneStack } from "../globals";
import { mxnBoilPivot } from "../mixins/mxn-boil-pivot";
import { objCharacter, ObjCharacterArgs } from "../objects/obj-character";
import { generateObjCharacterArgs } from "../objects/obj-npc";
import { setPlayerCharacterArgs } from "../objects/obj-player";
import { scnWorld } from "./scn-world";

export function scnChooseCharacter() {
    const lvl = Lvl.CharacterChooser();
    objCharacterChooser().at(lvl.PlayerMarker).show();
    lvl.TextGroup.children.forEach(x => x.mixin(mxnBoilPivot).invisible());
    lvl.TextGroup.coro(function* () {
        yield sleep(500);
        lvl.ChooseTitle.visible = true;
        yield sleep(100);
        lvl.ChooseArrow.visible = true;
        yield sleep(500);
        lvl.ChooseReroll.visible = true;
        yield sleep(500);
        lvl.ChooseOtherwise.visible = true;
    });
}

function objCharacterChooser() {
    return container()
        .coro(function* (self) {
            while (true) {
                const playerObj = objChooseCharacterPlayer(generateObjCharacterArgs()).at(self).show();
                yield sleepf(1);
                yield () => !playerObj.state.chosen && Key.justWentDown("Space");
                playerObj.destroy();
            }
        });
}

function objChooseCharacterPlayer(args: ObjCharacterArgs) {
    const state = {
        chosen: false,
    };

    return objCharacter(args)
        .merge({ state })
        .step(self => {
            if (state.chosen || Key.isDown("ArrowRight")) {
                self.x += 2;
                self.controls.pedometer += 0.1;
                self.controls.facingDirection = "east";
            }
            else {
                self.controls.pedometer = 0;
            }

            if (!state.chosen && self.x >= renderer.width) {
                setPlayerCharacterArgs(args);
                state.chosen = true;
                transitionToScene(scnWorld);
            }
        });
}

export function transitionToScene(sceneFn: () => unknown) {
    layers.overlay.coro(function* (self) {
        const gfx = new Graphics().beginFill(0).drawRect(0, 0, 700, 900).show(self).at(0, -989);
        gfx.angle = 45;
        yield interpvr(gfx).to(350, -350).over(1000);
        sceneStack.replace(sceneFn, { useGameplay: true });
        yield interpvr(gfx).to(989, 0).over(1000);
        gfx.destroy();
    });
}
