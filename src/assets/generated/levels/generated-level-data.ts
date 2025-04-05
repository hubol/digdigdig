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
  World: l({ width: 2500, height: 1400, backgroundTint: 0x408000 }, () => ({
    TreasuresBone0: d(Tx.Treasures.Bone0, { x: 1136, y: 680, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "BuriedDecals"),
    TreasuresHeart0: d(Tx.Treasures.Heart0, { x: 1786, y: 656, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "BuriedDecals"),
    ShapesSquare32: d(Tx.Shapes.Square32, { x: 1976, y: 680, scaleX: 4.1, scaleY: 10.1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xad885c }, "GroundDecals"),
    PatchSplotch0: d(Tx.Patch.Splotch0, { x: 1067, y: 635, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x98ad46 }, "GroundDecals"),
    PatchSplotch0_1: d(Tx.Patch.Splotch0, { x: 1098, y: 813, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb0c16e }, "GroundDecals"),
    PatchSplotch0_2: d(Tx.Patch.Splotch0, { x: 1293, y: 808, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x98ad46 }, "GroundDecals"),
    PatchSplotch0_3: d(Tx.Patch.Splotch0, { x: 1247, y: 628, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb0c16e }, "GroundDecals"),
    PatchSplotch0_4: d(Tx.Patch.Splotch0, { x: 1471, y: 810, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb0c16e }, "GroundDecals"),
    PatchSplotch0_5: d(Tx.Patch.Splotch0, { x: 1461, y: 625, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x98ad46 }, "GroundDecals"),
    PatchShadow0: d(Tx.Patch.Shadow0, { x: 1069, y: 638, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_1: d(Tx.Patch.Shadow0, { x: 1100, y: 616, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_2: d(Tx.Patch.Shadow0, { x: 1057, y: 819, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_3: d(Tx.Patch.Shadow0, { x: 1108, y: 836, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_4: d(Tx.Patch.Shadow0, { x: 1402, y: 792, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_5: d(Tx.Patch.Shadow0, { x: 1160, y: 720, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x98ad46 }, "GroundDecals"),
    PatchShadow0_6: d(Tx.Patch.Shadow0, { x: 1368, y: 728, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xb0c16e }, "GroundDecals"),
    PatchSplotch0_6: d(Tx.Patch.Splotch0, { x: 1500, y: 530, scaleX: 2, scaleY: 2, rotation: 0, originX: 0, originY: 0, tint: 0x98ad46 }, "GroundDecals"),
    PatchShadow0_7: d(Tx.Patch.Shadow0, { x: 1780, y: 688, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_8: d(Tx.Patch.Shadow0, { x: 1797, y: 637, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_9: d(Tx.Patch.Shadow0, { x: 1782, y: 661, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0: d(Tx.Shapes.VSmall0, { x: 1724, y: 723, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_1: d(Tx.Shapes.VSmall0, { x: 1752, y: 746, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_2: d(Tx.Shapes.VSmall0, { x: 1793, y: 727, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_3: d(Tx.Shapes.VSmall0, { x: 1833, y: 748, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_4: d(Tx.Shapes.VSmall0, { x: 1862, y: 723, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_5: d(Tx.Shapes.VSmall0, { x: 1880, y: 685, scaleX: 1, scaleY: 1, rotation: 270, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_6: d(Tx.Shapes.VSmall0, { x: 1906, y: 653, scaleX: 1, scaleY: 1, rotation: 270, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_7: d(Tx.Shapes.VSmall0, { x: 1677, y: 687, scaleX: 1, scaleY: 1, rotation: 90, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_8: d(Tx.Shapes.VSmall0, { x: 1695, y: 641, scaleX: 1, scaleY: 1, rotation: 90, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_9: d(Tx.Shapes.VSmall0, { x: 1744, y: 597, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    ShapesVSmall0_10: d(Tx.Shapes.VSmall0, { x: 1798, y: 600, scaleX: 1, scaleY: -1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    HintsMove: d(Tx.Hints.Move, { x: 1441, y: 588, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    HintsArrow: d(Tx.Hints.Arrow, { x: 1465, y: 643, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    HintsArrow_1: d(Tx.Hints.Arrow, { x: 1418, y: 643, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    HintsArrow_2: d(Tx.Hints.Arrow, { x: 1441, y: 648, scaleX: 1, scaleY: 1, rotation: 90, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    HintsArrow_3: d(Tx.Hints.Arrow, { x: 1441, y: 620, scaleX: -1, scaleY: 1, rotation: 90, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_10: d(Tx.Patch.Shadow0, { x: 1273, y: 814, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    PatchShadow0_11: d(Tx.Patch.Shadow0, { x: 1247, y: 778, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    FoliageGrass1: d(Tx.Foliage.Grass1, { x: 1696, y: 827, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc2c460 }, "GroundDecals"),
    PatchShadow0_12: d(Tx.Patch.Shadow0, { x: 1519, y: 775, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x7e8f3e }, "GroundDecals"),
    StoneRock1: d(Tx.Stone.Rock1, { x: 1512, y: 760, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "GroundDecals"),
    Acre: e(r["Acre"], { x: 1000, y: 560, flippedX: false, flippedY: false, values: { name: "" }, tint: 0x7e8f3e }, "AcreEntities"),
    Acre_1: e(r["Acre"], { x: 1500, y: 560, flippedX: true, flippedY: true, values: { name: "" }, tint: 0x7e8f3e }, "AcreEntities"),
    Acre_2: e(r["Acre"], { x: 500, y: 560, flippedX: false, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_3: e(r["Acre"], { x: 0, y: 560, flippedX: true, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_4: e(r["Acre"], { x: 2000, y: 560, flippedX: true, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_5: e(r["Acre"], { x: 0, y: 280, flippedX: false, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_6: e(r["Acre"], { x: 500, y: 280, flippedX: true, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_7: e(r["Acre"], { x: 1000, y: 280, flippedX: false, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_8: e(r["Acre"], { x: 1500, y: 280, flippedX: false, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_9: e(r["Acre"], { x: 2000, y: 280, flippedX: false, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_10: e(r["Acre"], { x: 0, y: 840, flippedX: false, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_11: e(r["Acre"], { x: 500, y: 840, flippedX: true, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_12: e(r["Acre"], { x: 1000, y: 840, flippedX: false, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_13: e(r["Acre"], { x: 1500, y: 840, flippedX: true, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_14: e(r["Acre"], { x: 2000, y: 840, flippedX: true, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_15: e(r["Acre"], { x: 0, y: 1120, flippedX: true, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_16: e(r["Acre"], { x: 500, y: 1120, flippedX: false, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_17: e(r["Acre"], { x: 1000, y: 1120, flippedX: true, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_18: e(r["Acre"], { x: 1500, y: 1120, flippedX: false, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_19: e(r["Acre"], { x: 2000, y: 1120, flippedX: true, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_20: e(r["Acre"], { x: 0, y: 0, flippedX: true, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_21: e(r["Acre"], { x: 500, y: 0, flippedX: true, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_22: e(r["Acre"], { x: 1000, y: 0, flippedX: false, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_23: e(r["Acre"], { x: 1500, y: 0, flippedX: true, flippedY: false, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    Acre_24: e(r["Acre"], { x: 2000, y: 0, flippedX: true, flippedY: true, values: { name: "" }, tint: 0xffffff }, "AcreEntities"),
    StoneRock0: d(Tx.Stone.Rock0, { x: 1368, y: 786, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "AboveGroundDecals"),
    StoneRock0_1: d(Tx.Stone.Rock0, { x: 1434, y: 784, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "AboveGroundDecals"),
    StoneRock1_1: d(Tx.Stone.Rock1, { x: 1059, y: 804, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "AboveGroundDecals"),
    StoneRock1_2: d(Tx.Stone.Rock1, { x: 1091, y: 599, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffffff }, "AboveGroundDecals"),
    FoliageGrass0: d(Tx.Foliage.Grass0, { x: 1066, y: 628, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x689952 }, "AboveGroundDecals"),
    FoliageFlower0: d(Tx.Foliage.Flower0, { x: 1092, y: 622, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffc046 }, "AboveGroundDecals"),
    FoliageGrass0_1: d(Tx.Foliage.Grass0, { x: 1115, y: 833, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0x689952 }, "AboveGroundDecals"),
    FoliageFlower0_1: d(Tx.Foliage.Flower0, { x: 1143, y: 824, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffc046 }, "AboveGroundDecals"),
    FoliageFlower0_2: d(Tx.Foliage.Flower0, { x: 1752, y: 632, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc86060 }, "AboveGroundDecals"),
    FoliageFlower0_3: d(Tx.Foliage.Flower0, { x: 1784, y: 656, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xffc046 }, "AboveGroundDecals"),
    FoliageFlower0_4: d(Tx.Foliage.Flower0, { x: 1816, y: 688, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc86060 }, "AboveGroundDecals"),
    FoliageFlower0_5: d(Tx.Foliage.Flower0, { x: 1825, y: 631, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc86060 }, "AboveGroundDecals"),
    FoliageFlower0_6: d(Tx.Foliage.Flower0, { x: 1748, y: 682, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc86060 }, "AboveGroundDecals"),
    FoliageGrass1_1: d(Tx.Foliage.Grass1, { x: 1567, y: 804, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc2c460 }, "AboveGroundDecals"),
    FoliageGrass1_2: d(Tx.Foliage.Grass1, { x: 1623, y: 806, scaleX: 1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc2c460 }, "AboveGroundDecals"),
    FoliageGrass1_3: d(Tx.Foliage.Grass1, { x: 1591, y: 791, scaleX: -1, scaleY: 1, rotation: 0, originX: 0.5, originY: 0.5, tint: 0xc2c460 }, "AboveGroundDecals"),
    Book: e(r["Book"], { x: 1256, y: 784, values: { message: "Use Space to start digging. Draw a square!", name: "" } }, "DiggableEntities"),
    PlayerStartMarker: e(r["Marker"], { x: 1248, y: 696, values: { name: "PlayerStartMarker", depth: 0 }, tint: 0x00ff00 }, "MarkerEntities"),
  })),
};

export namespace LvlType {
  export type CharacterChooser = ReturnType<(typeof Lvl)["CharacterChooser"]>;
  export type Placeholder = ReturnType<(typeof Lvl)["Placeholder"]>;
  export type World = ReturnType<(typeof Lvl)["World"]>;
}
