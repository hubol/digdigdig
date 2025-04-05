// This file is generated

import { OgmoEntityResolvers as r } from "../../../igua/ogmo/entity-resolvers";
import { OgmoFactory } from "../../../igua/ogmo/factory";
import { Tx } from "../../../assets/textures";

const { createEntity: e, createDecal: d, createLevel: l, createDecalGroup: dg } = OgmoFactory;

export const Lvl = {
  Placeholder: l({ width: 500, height: 280, backgroundTint: 0x408000 }, () => ({
    Block: e(r["Block"], { x: 0, y: 192, width: 176, height: 88, values: { name: "", visible: true }, tint: 0x000000 }, "Entities"),
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
    PlayerStartMarker: e(r["Marker"], { x: 248, y: 136, values: { name: "PlayerStartMarker", depth: 0 }, tint: 0x00ff00 }, "MarkerEntities"),
  })),
};

export namespace LvlType {
  export type Placeholder = ReturnType<(typeof Lvl)["Placeholder"]>;
  export type World = ReturnType<(typeof Lvl)["World"]>;
}
