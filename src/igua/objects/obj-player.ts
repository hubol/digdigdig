import { approachLinear } from "../../lib/math/number";
import { Rng } from "../../lib/math/rng";
import { vnew } from "../../lib/math/vector-type";
import { Key } from "../globals";
import { objCharacter } from "./obj-character";
import { generateNpcTints } from "./obj-npc";

const v = vnew();

export function objPlayer() {
    return objCharacter(generateNpcTints(Rng.int(10_000_000, 420_000_000)))
        .step(self => {
            v.at(0, 0);

            self.controls.upsideDownUnit = approachLinear(
                self.controls.upsideDownUnit,
                Key.isDown("Space") ? 1 : 0,
                0.05,
            );

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
        });
}
