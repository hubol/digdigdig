// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 43 }];

interface TxData {
  id: string;
  atlas: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

function txs<T>(tx: (data: TxData) => T) {
  return {
    CharacterShadowSmall: tx({ id: "CharacterShadowSmall", atlas: 0, x: 194, y: 665, width: 47, height: 13 }),
    CharacterShadow: tx({ id: "CharacterShadow", atlas: 0, x: 737, y: 261, width: 80, height: 19 }),
    Character: tx({ id: "Character", atlas: 0, x: 0, y: 0, width: 1000, height: 150 }),
    Choose: {
      Arrow: tx({ id: "Choose.Arrow", atlas: 0, x: 255, y: 874, width: 67, height: 120 }),
      Cloud: tx({ id: "Choose.Cloud", atlas: 0, x: 737, y: 219, width: 216, height: 41 }),
      Otherwise: tx({ id: "Choose.Otherwise", atlas: 0, x: 810, y: 656, width: 177, height: 68 }),
      Reroll: tx({ id: "Choose.Reroll", atlas: 0, x: 501, y: 483, width: 316, height: 52 }),
      Title: tx({ id: "Choose.Title", atlas: 0, x: 737, y: 151, width: 280, height: 67 }),
    },
    Dig: {
      Hole: tx({ id: "Dig.Hole", atlas: 0, x: 194, y: 617, width: 49, height: 47 }),
    },
    Enemy: {
      GoonSpell: tx({ id: "Enemy.GoonSpell", atlas: 0, x: 501, y: 404, width: 480, height: 78 }),
      Goon: tx({ id: "Enemy.Goon", atlas: 0, x: 0, y: 151, width: 736, height: 141 }),
    },
    Foliage: {
      Bush0: tx({ id: "Foliage.Bush0", atlas: 0, x: 0, y: 874, width: 254, height: 125 }),
      Flower0: tx({ id: "Foliage.Flower0", atlas: 0, x: 988, y: 656, width: 36, height: 24 }),
      Grass0: tx({ id: "Foliage.Grass0", atlas: 0, x: 0, y: 644, width: 100, height: 43 }),
      Grass1: tx({ id: "Foliage.Grass1", atlas: 0, x: 943, y: 261, width: 47, height: 25 }),
      Grass2: tx({ id: "Foliage.Grass2", atlas: 0, x: 213, y: 1000, width: 101, height: 14 }),
      Leaves0: tx({ id: "Foliage.Leaves0", atlas: 0, x: 971, y: 750, width: 51, height: 47 }),
      PineTree0: tx({ id: "Foliage.PineTree0", atlas: 0, x: 128, y: 609, width: 65, height: 124 }),
      Trunk0: tx({ id: "Foliage.Trunk0", atlas: 0, x: 323, y: 938, width: 11, height: 84 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 213, y: 1015, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 810, y: 725, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 0, y: 574, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 110, y: 1000, width: 102, height: 24 }),
      GoodBoy: tx({ id: "Font.GoodBoy", atlas: 0, x: 0, y: 745, width: 256, height: 128 }),
      OldMaiden: tx({ id: "Font.OldMaiden", atlas: 0, x: 501, y: 536, width: 308, height: 208 }),
    },
    Hints: {
      Acre: tx({ id: "Hints.Acre", atlas: 0, x: 0, y: 293, width: 500, height: 280 }),
      Arrow: tx({ id: "Hints.Arrow", atlas: 0, x: 101, y: 644, width: 24, height: 17 }),
      Book: tx({ id: "Hints.Book", atlas: 0, x: 257, y: 792, width: 113, height: 68 }),
      Move: tx({ id: "Hints.Move", atlas: 0, x: 818, y: 261, width: 75, height: 27 }),
    },
    Hud: {
      Book: tx({ id: "Hud.Book", atlas: 0, x: 501, y: 293, width: 500, height: 110 }),
      EnergyBar: tx({ id: "Hud.EnergyBar", atlas: 0, x: 0, y: 1000, width: 109, height: 16 }),
      Energy: tx({ id: "Hud.Energy", atlas: 0, x: 894, y: 261, width: 48, height: 22 }),
    },
    Misc: {
      WaterLine: tx({ id: "Misc.WaterLine", atlas: 0, x: 257, y: 861, width: 63, height: 12 }),
    },
    Patch: {
      Blob0: tx({ id: "Patch.Blob0", atlas: 0, x: 818, y: 483, width: 182, height: 172 }),
      Shadow0: tx({ id: "Patch.Shadow0", atlas: 0, x: 0, y: 609, width: 127, height: 34 }),
      Splotch0: tx({ id: "Patch.Splotch0", atlas: 0, x: 257, y: 574, width: 243, height: 217 }),
    },
    Shapes: {
      LightSmall0: tx({ id: "Shapes.LightSmall0", atlas: 0, x: 0, y: 1017, width: 19, height: 7 }),
      Square32: tx({ id: "Shapes.Square32", atlas: 0, x: 161, y: 574, width: 32, height: 32 }),
      VSmall0: tx({ id: "Shapes.VSmall0", atlas: 0, x: 1002, y: 219, width: 19, height: 13 }),
    },
    Stone: {
      Rock0: tx({ id: "Stone.Rock0", atlas: 0, x: 971, y: 725, width: 53, height: 24 }),
      Rock1: tx({ id: "Stone.Rock1", atlas: 0, x: 0, y: 688, width: 97, height: 48 }),
    },
    Treasures: {
      Bone0: tx({ id: "Treasures.Bone0", atlas: 0, x: 323, y: 861, width: 98, height: 76 }),
      Heart0: tx({ id: "Treasures.Heart0", atlas: 0, x: 194, y: 574, width: 55, height: 42 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
