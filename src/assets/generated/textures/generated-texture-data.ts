// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 51 }];

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
    CharacterShadowSmall: tx({ id: "CharacterShadowSmall", atlas: 0, x: 3884, y: 91, width: 47, height: 13 }),
    CharacterShadow: tx({ id: "CharacterShadow", atlas: 0, x: 4001, y: 183, width: 80, height: 19 }),
    Character: tx({ id: "Character", atlas: 0, x: 2683, y: 0, width: 1000, height: 150 }),
    Choose: {
      Arrow: tx({ id: "Choose.Arrow", atlas: 0, x: 3933, y: 138, width: 67, height: 120 }),
      Cloud: tx({ id: "Choose.Cloud", atlas: 0, x: 2236, y: 233, width: 216, height: 41 }),
      Otherwise: tx({ id: "Choose.Otherwise", atlas: 0, x: 3218, y: 293, width: 177, height: 68 }),
      Reroll: tx({ id: "Choose.Reroll", atlas: 0, x: 2236, y: 180, width: 316, height: 52 }),
      Title: tx({ id: "Choose.Title", atlas: 0, x: 3684, y: 0, width: 280, height: 67 }),
    },
    Dig: {
      Hole: tx({ id: "Dig.Hole", atlas: 0, x: 3369, y: 362, width: 49, height: 47 }),
    },
    Effects: {
      Release0: tx({ id: "Effects.Release0", atlas: 0, x: 0, y: 0, width: 2682, height: 179 }),
      Release1: tx({ id: "Effects.Release1", atlas: 0, x: 0, y: 180, width: 2235, height: 179 }),
    },
    Enemy: {
      GoonSpell: tx({ id: "Enemy.GoonSpell", atlas: 0, x: 2737, y: 293, width: 480, height: 78 }),
      Goon: tx({ id: "Enemy.Goon", atlas: 0, x: 2683, y: 151, width: 736, height: 141 }),
    },
    Foliage: {
      Bush0: tx({ id: "Foliage.Bush0", atlas: 0, x: 3303, y: 497, width: 254, height: 125 }),
      Flower0: tx({ id: "Foliage.Flower0", atlas: 0, x: 4050, y: 313, width: 36, height: 24 }),
      Grass0: tx({ id: "Foliage.Grass0", atlas: 0, x: 3684, y: 68, width: 100, height: 43 }),
      Grass1: tx({ id: "Foliage.Grass1", atlas: 0, x: 3884, y: 105, width: 47, height: 25 }),
      Grass2: tx({ id: "Foliage.Grass2", atlas: 0, x: 2346, y: 275, width: 101, height: 14 }),
      Leaves0: tx({ id: "Foliage.Leaves0", atlas: 0, x: 3998, y: 313, width: 51, height: 47 }),
      PineTree0: tx({ id: "Foliage.PineTree0", atlas: 0, x: 3303, y: 362, width: 65, height: 124 }),
      Trunk0: tx({ id: "Foliage.Trunk0", atlas: 0, x: 3921, y: 216, width: 11, height: 84 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 2448, y: 284, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 3933, y: 68, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 3933, y: 103, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 3965, y: 0, width: 102, height: 24 }),
      GoodBoy: tx({ id: "Font.GoodBoy", atlas: 0, x: 3046, y: 372, width: 256, height: 128 }),
      OldMaiden: tx({ id: "Font.OldMaiden", atlas: 0, x: 2737, y: 372, width: 308, height: 208 }),
      Scribdig: tx({ id: "Font.Scribdig", atlas: 0, x: 3420, y: 151, width: 512, height: 64 }),
    },
    Hints: {
      Acre: tx({ id: "Hints.Acre", atlas: 0, x: 3420, y: 216, width: 500, height: 280 }),
      Arrow: tx({ id: "Hints.Arrow", atlas: 0, x: 3760, y: 112, width: 24, height: 17 }),
      Book: tx({ id: "Hints.Book", atlas: 0, x: 2553, y: 215, width: 113, height: 68 }),
      LookEast: tx({ id: "Hints.LookEast", atlas: 0, x: 4001, y: 203, width: 69, height: 44 }),
      Move: tx({ id: "Hints.Move", atlas: 0, x: 3684, y: 112, width: 75, height: 27 }),
      NothingHere: tx({ id: "Hints.NothingHere", atlas: 0, x: 4001, y: 138, width: 87, height: 44 }),
    },
    Hud: {
      Book: tx({ id: "Hud.Book", atlas: 0, x: 2236, y: 293, width: 500, height: 110 }),
      DamageFresh: tx({ id: "Hud.DamageFresh", atlas: 0, x: 4001, y: 248, width: 64, height: 64 }),
      Damage: tx({ id: "Hud.Damage", atlas: 0, x: 3933, y: 259, width: 64, height: 64 }),
      EnergyBar: tx({ id: "Hud.EnergyBar", atlas: 0, x: 2236, y: 275, width: 109, height: 16 }),
      Energy: tx({ id: "Hud.Energy", atlas: 0, x: 3884, y: 68, width: 48, height: 22 }),
      Life: tx({ id: "Hud.Life", atlas: 0, x: 4066, y: 248, width: 30, height: 22 }),
    },
    Misc: {
      WaterLine: tx({ id: "Misc.WaterLine", atlas: 0, x: 3965, y: 25, width: 63, height: 12 }),
    },
    Patch: {
      Blob0: tx({ id: "Patch.Blob0", atlas: 0, x: 3558, y: 497, width: 182, height: 172 }),
      Shadow0: tx({ id: "Patch.Shadow0", atlas: 0, x: 2553, y: 180, width: 127, height: 34 }),
      Splotch0: tx({ id: "Patch.Splotch0", atlas: 0, x: 3046, y: 501, width: 243, height: 217 }),
    },
    Shapes: {
      LightSmall0: tx({ id: "Shapes.LightSmall0", atlas: 0, x: 2503, y: 284, width: 19, height: 7 }),
      Square32: tx({ id: "Shapes.Square32", atlas: 0, x: 4050, y: 338, width: 32, height: 32 }),
      VSmall0: tx({ id: "Shapes.VSmall0", atlas: 0, x: 3396, y: 293, width: 19, height: 13 }),
    },
    Stone: {
      Rock0: tx({ id: "Stone.Rock0", atlas: 0, x: 3965, y: 38, width: 53, height: 24 }),
      Rock1: tx({ id: "Stone.Rock1", atlas: 0, x: 2453, y: 233, width: 97, height: 48 }),
    },
    Treasures: {
      Bone0: tx({ id: "Treasures.Bone0", atlas: 0, x: 3785, y: 68, width: 98, height: 76 }),
      Heart0: tx({ id: "Treasures.Heart0", atlas: 0, x: 4029, y: 25, width: 55, height: 42 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
