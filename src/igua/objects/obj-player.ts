import { vnew } from "../../lib/math/vector-type";
import { Key } from "../globals";
import { objCharacter } from "./obj-character";

const v = vnew();

export function objPlayer() {
    return objCharacter()
        .step(self => {
            v.at(0, 0);
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

            if (!v.isZero) {
                v.normalize().scale(2);
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
