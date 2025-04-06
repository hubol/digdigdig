import { Lvl } from "../../assets/generated/levels/generated-level-data";
import { Mzk } from "../../assets/music";
import { Instances } from "../../lib/game-engine/instances";
import { Jukebox } from "../core/igua-audio";
import { scene } from "../globals";
import { createPlayerObj } from "../objects/obj-player";
import { createTreasureSpriteFromKind } from "../objects/obj-treasure";
import { progress } from "../objects/progress";
import { objMarker } from "../objects/utils/obj-marker";

export function scnEnding() {
    Jukebox.play(Mzk.Title);

    const lvl = Lvl.Ending();

    createPlayerObj().at(lvl.PlayerMarker);

    // progress.treasures = [
    //     "GoldIdol",
    //     "GoldenIdolHappy",
    //     "Bone",
    //     "Skull",
    //     "RingWithGreenStone",
    //     "DrillUpgradeEnergy",
    //     "DrillUpgradeRadius",
    //     "DrillUpgradeSpeed",
    //     "DrillUpgradeAttack",
    //     "Tea",
    //     "InvisibleUnderwear",
    //     "FishingPole",
    //     "Diamond",
    //     "GiftCard",
    //     "Soap",
    //     "SilverMedal",
    // ];

    Instances(objMarker)
        .filter(x => x !== lvl.PlayerMarker)
        .forEach((markerObj, index) => {
            const kind = progress.treasures[index];
            if (kind) {
                createTreasureSpriteFromKind(kind)
                    .at(markerObj)
                    .anchored(0.5, 1)
                    .show(scene.perspectiveStage);
            }
        });
}
