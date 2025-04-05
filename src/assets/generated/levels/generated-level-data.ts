// This file is generated

import { OgmoEntityResolvers as r } from "../../../igua/ogmo/entity-resolvers";
import { OgmoFactory } from "../../../igua/ogmo/factory";
import { Tx } from "../../../assets/textures";

const { createEntity: e, createDecal: d, createLevel: l, createDecalGroup: dg } = OgmoFactory;

export const Lvl = {
  CharacterChooser: l({ width: 500, height: 280, backgroundTint: 0xab97b7 }, () => ({
    ShapesSquare32: d(Tx.Shapes.Square32, { x: 232, y: 112, scaleX: 19, scaleY: 10, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x585291 }, "BuriedDecals"),
    ChooseCloud: d(Tx.Choose.Cloud, { x: 81, y: 102, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb5b1d8 }, "GroundDecals"),
    FoliageGrass2: d(Tx.Foliage.Grass2, { x: 106, y: 183, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x416d3a }, "GroundDecals"),
    FoliageTrunk0: d(Tx.Foliage.Trunk0, { x: 153, y: 150, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x8b6656 }, "GroundDecals"),
    FoliagePineTree0: d(Tx.Foliage.PineTree0, { x: 155, y: 113, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x416d3a }, "GroundDecals"),
    FoliageTrunk0_1: d(Tx.Foliage.Trunk0, { x: 63, y: 153, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x8b6656 }, "GroundDecals"),
    FoliagePineTree0_1: d(Tx.Foliage.PineTree0, { x: 65, y: 116, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x416d3a }, "GroundDecals"),
    ShapesSquare32_1: d(Tx.Shapes.Square32, { x: 0, y: 184, scaleX: 17, scaleY: 3, rotation: 0, originX: 0, originY: 0, tint: 0x416d3a }, "GroundDecals"),
    PatchShadow0: d(Tx.Patch.Shadow0, { x: 55, y: 200, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x32592b }, "GroundDecals"),
    FoliageTrunk0_2: d(Tx.Foliage.Trunk0, { x: 26, y: 150, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x8b6656 }, "GroundDecals"),
    FoliagePineTree0_2: d(Tx.Foliage.PineTree0, { x: 26, y: 114, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x223e1d }, "GroundDecals"),
    FoliagePineTree0_3: d(Tx.Foliage.PineTree0, { x: 116, y: 111, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x223e1d }, "GroundDecals"),
    FoliageTrunk0_3: d(Tx.Foliage.Trunk0, { x: 117, y: 152, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x8b6656 }, "GroundDecals"),
    StoneRock0: d(Tx.Stone.Rock0, { x: -4, y: 260, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "GroundDecals"),
    StoneRock0_1: d(Tx.Stone.Rock0, { x: 20, y: 274, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "GroundDecals"),
    PatchShadow0_1: d(Tx.Patch.Shadow0, { x: 241, y: 194, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x32592b }, "GroundDecals"),
    StoneRock1: d(Tx.Stone.Rock1, { x: 232, y: 176, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "GroundDecals"),
    StoneRock0_2: d(Tx.Stone.Rock0, { x: 279, y: 198, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "GroundDecals"),
    FoliageGrass1: d(Tx.Foliage.Grass1, { x: 33, y: 194, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x97b45c }, "GroundDecals"),
    FoliageGrass1_1: d(Tx.Foliage.Grass1, { x: 8, y: 211, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xcbc773 }, "GroundDecals"),
    PatchShadow0_2: d(Tx.Patch.Shadow0, { x: 436, y: 274, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x32592b }, "GroundDecals"),
    FoliageGrass1_2: d(Tx.Foliage.Grass1, { x: 448, y: 256, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x97b45c }, "GroundDecals"),
    FoliageGrass1_3: d(Tx.Foliage.Grass1, { x: 423, y: 273, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xcbc773 }, "GroundDecals"),
    ChooseCloud_1: d(Tx.Choose.Cloud, { x: 437, y: 50, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb5b1d8 }, "GroundDecals"),
    TextGroup: dg("TextGroup", "AboveGroundDecals"),
    ChooseTitle: d(Tx.Choose.Title, { x: 156, y: 35, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, groupName: "TextGroup", tint: 0xffffff }, "AboveGroundDecals"),
    ChooseArrow: d(Tx.Choose.Arrow, { x: 83, y: 141, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, groupName: "TextGroup", tint: 0xffffff }, "AboveGroundDecals"),
    ChooseOtherwise: d(Tx.Choose.Otherwise, { x: 396, y: 136, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, groupName: "TextGroup", tint: 0xffffff }, "AboveGroundDecals"),
    ChooseReroll: d(Tx.Choose.Reroll, { x: 191, y: 250, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, groupName: "TextGroup", tint: 0xffffff }, "AboveGroundDecals"),
    FoliageGrass1_4: d(Tx.Foliage.Grass1, { x: 320, y: 197, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x97b45c }, "AboveGroundDecals"),
    FoliageGrass1_5: d(Tx.Foliage.Grass1, { x: 295, y: 214, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xcbc773 }, "AboveGroundDecals"),
    FoliageGrass2_1: d(Tx.Foliage.Grass2, { x: 416, y: 184, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x416d3a }, "AboveGroundDecals"),
    FoliageFlower0: d(Tx.Foliage.Flower0, { x: 476, y: 270, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xf3b640 }, "AboveGroundDecals"),
    FoliageFlower0_1: d(Tx.Foliage.Flower0, { x: 399, y: 262, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xd85f5f }, "AboveGroundDecals"),
    PlayerMarker: e(r["Marker"], { x: 176, y: 216, values: { name: "PlayerMarker", depth: 0 }, tint: 0x00ff00 }, "MarkerEntities"),
  })),
  Placeholder: l({ width: 500, height: 280, backgroundTint: 0x408000 }, () => ({
    Block: e(r["Block"], { x: 0, y: 192, width: 176, height: 88, values: { name: "", visible: true }, tint: 0x000000 }, "DiggableEntities"),
    Region: e(r["Region"], { x: 72, y: 40, width: 240, height: 120, values: { name: "", depth: 0 }, tint: 0x00ff00 }, "RegionEntities"),
    Marker: e(r["Marker"], { x: 120, y: 88, values: { name: "", depth: 0 }, tint: 0x00ff00 }, "MarkerEntities"),
    Marker_1: e(r["Marker"], { x: 184, y: 120, values: { name: "", depth: 0 }, tint: 0x00ff00 }, "MarkerEntities"),
    Marker_2: e(r["Marker"], { x: 280, y: 112, values: { name: "", depth: 0 }, tint: 0x00ff00 }, "MarkerEntities"),
    Marker_3: e(r["Marker"], { x: 272, y: 64, values: { name: "", depth: 0 }, tint: 0x00ff00 }, "MarkerEntities"),
  })),
  World: l({ width: 1008, height: 280, backgroundTint: 0x408000 }, () => ({
    TreasuresBone0: d(Tx.Treasures.Bone0, { x: 136, y: 120, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "BuriedDecals"),
    TreasuresHeart0: d(Tx.Treasures.Heart0, { x: 786, y: 96, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "BuriedDecals"),
    PatchSplotch0: d(Tx.Patch.Splotch0, { x: 67, y: 75, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x98ad46 }, "GroundDecals"),
    PatchSplotch0_1: d(Tx.Patch.Splotch0, { x: 98, y: 253, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb0c16e }, "GroundDecals"),
    PatchSplotch0_2: d(Tx.Patch.Splotch0, { x: 293, y: 248, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x98ad46 }, "GroundDecals"),
    PatchSplotch0_3: d(Tx.Patch.Splotch0, { x: 247, y: 68, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb0c16e }, "GroundDecals"),
    PatchSplotch0_4: d(Tx.Patch.Splotch0, { x: 471, y: 250, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb0c16e }, "GroundDecals"),
    PatchSplotch0_5: d(Tx.Patch.Splotch0, { x: 461, y: 65, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x98ad46 }, "GroundDecals"),
    PatchShadow0: d(Tx.Patch.Shadow0, { x: 69, y: 78, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_1: d(Tx.Patch.Shadow0, { x: 100, y: 56, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_2: d(Tx.Patch.Shadow0, { x: 57, y: 259, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_3: d(Tx.Patch.Shadow0, { x: 108, y: 276, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_4: d(Tx.Patch.Shadow0, { x: 402, y: 232, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_5: d(Tx.Patch.Shadow0, { x: 160, y: 160, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x98ad46 }, "GroundDecals"),
    PatchShadow0_6: d(Tx.Patch.Shadow0, { x: 368, y: 168, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb0c16e }, "GroundDecals"),
    PatchSplotch0_6: d(Tx.Patch.Splotch0, { x: 500, y: -30, scaleX: 2, scaleY: 2, rotation: 0, originX: 0, originY: 0, tint: 0x98ad46 }, "GroundDecals"),
    PatchShadow0_7: d(Tx.Patch.Shadow0, { x: 780, y: 128, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_8: d(Tx.Patch.Shadow0, { x: 797, y: 77, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_9: d(Tx.Patch.Shadow0, { x: 782, y: 101, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0: d(Tx.Shapes.VSmall0, { x: 724, y: 163, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_1: d(Tx.Shapes.VSmall0, { x: 752, y: 186, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_2: d(Tx.Shapes.VSmall0, { x: 793, y: 167, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_3: d(Tx.Shapes.VSmall0, { x: 833, y: 188, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_4: d(Tx.Shapes.VSmall0, { x: 862, y: 163, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_5: d(Tx.Shapes.VSmall0, { x: 880, y: 125, scaleX: 1, scaleY: 1, rotation: 270, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_6: d(Tx.Shapes.VSmall0, { x: 906, y: 93, scaleX: 1, scaleY: 1, rotation: 270, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_7: d(Tx.Shapes.VSmall0, { x: 677, y: 127, scaleX: 1, scaleY: 1, rotation: 90, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_8: d(Tx.Shapes.VSmall0, { x: 695, y: 81, scaleX: 1, scaleY: 1, rotation: 90, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_9: d(Tx.Shapes.VSmall0, { x: 744, y: 37, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_10: d(Tx.Shapes.VSmall0, { x: 798, y: 40, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    HintsMove: d(Tx.Hints.Move, { x: 449, y: 20, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    HintsArrow: d(Tx.Hints.Arrow, { x: 473, y: 75, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    HintsArrow_1: d(Tx.Hints.Arrow, { x: 426, y: 75, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    HintsArrow_2: d(Tx.Hints.Arrow, { x: 449, y: 80, scaleX: 1, scaleY: 1, rotation: 90, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    HintsArrow_3: d(Tx.Hints.Arrow, { x: 449, y: 52, scaleX: -1, scaleY: 1, rotation: 90, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_10: d(Tx.Patch.Shadow0, { x: 273, y: 254, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_11: d(Tx.Patch.Shadow0, { x: 247, y: 218, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    StoneRock0: d(Tx.Stone.Rock0, { x: 368, y: 226, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "AboveGroundDecals"),
    StoneRock0_1: d(Tx.Stone.Rock0, { x: 434, y: 224, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "AboveGroundDecals"),
    StoneRock1: d(Tx.Stone.Rock1, { x: 59, y: 244, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "AboveGroundDecals"),
    StoneRock1_1: d(Tx.Stone.Rock1, { x: 91, y: 39, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "AboveGroundDecals"),
    FoliageGrass0: d(Tx.Foliage.Grass0, { x: 66, y: 68, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x689952 }, "AboveGroundDecals"),
    FoliageFlower0: d(Tx.Foliage.Flower0, { x: 92, y: 62, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffc046 }, "AboveGroundDecals"),
    FoliageGrass0_1: d(Tx.Foliage.Grass0, { x: 115, y: 273, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x689952 }, "AboveGroundDecals"),
    FoliageFlower0_1: d(Tx.Foliage.Flower0, { x: 143, y: 264, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffc046 }, "AboveGroundDecals"),
    FoliageFlower0_2: d(Tx.Foliage.Flower0, { x: 752, y: 72, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc86060 }, "AboveGroundDecals"),
    FoliageFlower0_3: d(Tx.Foliage.Flower0, { x: 784, y: 96, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffc046 }, "AboveGroundDecals"),
    FoliageFlower0_4: d(Tx.Foliage.Flower0, { x: 816, y: 128, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc86060 }, "AboveGroundDecals"),
    FoliageFlower0_5: d(Tx.Foliage.Flower0, { x: 825, y: 71, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc86060 }, "AboveGroundDecals"),
    FoliageFlower0_6: d(Tx.Foliage.Flower0, { x: 748, y: 122, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc86060 }, "AboveGroundDecals"),
    Book: e(r["Book"], { x: 256, y: 224, values: { message: "", name: "" } }, "DiggableEntities"),
    PlayerStartMarker: e(r["Marker"], { x: 248, y: 136, values: { name: "PlayerStartMarker", depth: 0 }, tint: 0x00ff00 }, "MarkerEntities"),
  })),
};

export namespace LvlType {
  export type CharacterChooser = ReturnType<(typeof Lvl)["CharacterChooser"]>;
  export type Placeholder = ReturnType<(typeof Lvl)["Placeholder"]>;
  export type World = ReturnType<(typeof Lvl)["World"]>;
}
