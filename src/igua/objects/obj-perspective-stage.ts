import { container } from "../../lib/pixi/container";

export function objPerspectiveStage() {
    return container().autoSorted().step(self => {
        for (let i = 0; i < self.children.length; i++) {
            self.children[i].zIndex = self.children[i].y;
        }
    });
}
