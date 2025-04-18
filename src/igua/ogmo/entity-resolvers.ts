import { Graphics } from "pixi.js";
import { OgmoProject } from "../../assets/generated/levels/generated-ogmo-project-data";
import { objAcre } from "../objects/obj-acre";
import { objBlock } from "../objects/obj-block";
import { objBook } from "../objects/obj-book";
import { objCharacter } from "../objects/obj-character";
import { objDigSpot } from "../objects/obj-dig-spot";
import { objGoon } from "../objects/obj-goon";
import { generateObjCharacterArgs } from "../objects/obj-npc";
import { objSolidSlope } from "../objects/obj-terrain";
import { objTreasure } from "../objects/obj-treasure";
import { objTreasurePrize } from "../objects/obj-treasure-prize";
import { objMarker } from "../objects/utils/obj-marker";
import { OgmoFactory } from "./factory";

export const OgmoEntityResolvers = {
    "Block": objBlock,
    "Slope": objSolidSlope,
    "Marker": objMarker,
    "Region": () => new Graphics().beginFill(0x00ff00).drawRect(0, 0, 1, 1).invisible(),
    Book: (e) => objBook(e.values.message),
    Acre: (e) => objAcre({ x: e.x, y: e.y }).pivoted(250, 140).at(250, 140),
    Goon: (e) => objGoon({ rank: e.values.rank }),
    Treasure: (e) => objTreasure(e.values.kind),
    TreasurePrize: (e) => objTreasurePrize(e.values.kind),
    DigSpot: objDigSpot,
    Character: () => objCharacter(generateObjCharacterArgs()),
} satisfies {
    [TName in OgmoProject.Entities.Names]: (e: OgmoFactory.Entity<TName>) => unknown;
};
