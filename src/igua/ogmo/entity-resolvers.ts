import { Graphics } from "pixi.js";
import { OgmoProject } from "../../assets/generated/levels/generated-ogmo-project-data";
import { objBook } from "../objects/obj-book";
import { objSolidBlock, objSolidSlope } from "../objects/obj-terrain";
import { objMarker } from "../objects/utils/obj-marker";
import { OgmoFactory } from "./factory";

export const OgmoEntityResolvers = {
    "Block": objSolidBlock,
    "Slope": objSolidSlope,
    "Marker": objMarker,
    "Region": () => new Graphics().beginFill(0x00ff00).drawRect(0, 0, 1, 1).invisible(),
    Book: (e) => objBook(e.values.message),
} satisfies {
    [TName in OgmoProject.Entities.Names]: (e: OgmoFactory.Entity<TName>) => unknown;
};
