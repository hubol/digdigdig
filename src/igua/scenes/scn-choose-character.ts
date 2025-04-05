import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { EscapeTickerAndExecute } from "../../lib/game-engine/asshat-ticker";
import { sleep, sleepf } from "../../lib/game-engine/routines/sleep";
import { container } from "../../lib/pixi/container";
import { renderer } from "../current-pixi-renderer";
import { Key, sceneStack } from "../globals";
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
                yield () => Key.justWentDown("Space");
                playerObj.destroy();
            }
        });
}

function objChooseCharacterPlayer(args: ObjCharacterArgs) {
    return objCharacter(args)
        .step(self => {
            if (Key.isDown("ArrowRight")) {
                self.x += 2;
                self.controls.pedometer += 0.1;
                self.controls.facingDirection = "east";
            }
            else {
                self.controls.pedometer = 0;
            }

            if (self.x >= renderer.width) {
                setPlayerCharacterArgs(args);
                throw new EscapeTickerAndExecute(() => sceneStack.replace(scnWorld, { useGameplay: true }));
            }
        });
}
