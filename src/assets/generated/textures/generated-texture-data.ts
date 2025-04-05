// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 32 }];

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
    CharacterShadowSmall: tx({ id: "CharacterShadowSmall", atlas: 0, x: 50, y: 461, width: 47, height: 13 }),
    CharacterShadow: tx({ id: "CharacterShadow", atlas: 0, x: 766, y: 277, width: 80, height: 19 }),
    Character: tx({ id: "Character", atlas: 0, x: 0, y: 0, width: 1000, height: 150 }),
    Choose: {
      Arrow: tx({ id: "Choose.Arrow", atlas: 0, x: 501, y: 219, width: 67, height: 120 }),
      Otherwise: tx({ id: "Choose.Otherwise", atlas: 0, x: 0, y: 333, width: 177, height: 68 }),
      Reroll: tx({ id: "Choose.Reroll", atlas: 0, x: 0, y: 151, width: 316, height: 52 }),
      Title: tx({ id: "Choose.Title", atlas: 0, x: 317, y: 151, width: 280, height: 67 }),
    },
    Dig: {
      Hole: tx({ id: "Dig.Hole", atlas: 0, x: 0, y: 461, width: 49, height: 47 }),
    },
    Foliage: {
      Bush0: tx({ id: "Foliage.Bush0", atlas: 0, x: 598, y: 151, width: 254, height: 125 }),
      Flower0: tx({ id: "Foliage.Flower0", atlas: 0, x: 981, y: 221, width: 36, height: 24 }),
      Grass0: tx({ id: "Foliage.Grass0", atlas: 0, x: 0, y: 417, width: 100, height: 43 }),
      Grass1: tx({ id: "Foliage.Grass1", atlas: 0, x: 50, y: 475, width: 47, height: 25 }),
      Grass2: tx({ id: "Foliage.Grass2", atlas: 0, x: 0, y: 402, width: 101, height: 14 }),
      Leaves0: tx({ id: "Foliage.Leaves0", atlas: 0, x: 101, y: 430, width: 51, height: 47 }),
      PineTree0: tx({ id: "Foliage.PineTree0", atlas: 0, x: 178, y: 333, width: 65, height: 124 }),
      Trunk0: tx({ id: "Foliage.Trunk0", atlas: 0, x: 244, y: 333, width: 11, height: 84 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 257, y: 204, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 853, y: 151, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 853, y: 186, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 853, y: 256, width: 102, height: 24 }),
      GoodBoy: tx({ id: "Font.GoodBoy", atlas: 0, x: 0, y: 204, width: 256, height: 128 }),
    },
    Hints: {
      Arrow: tx({ id: "Hints.Arrow", atlas: 0, x: 153, y: 430, width: 24, height: 17 }),
      Move: tx({ id: "Hints.Move", atlas: 0, x: 102, y: 402, width: 75, height: 27 }),
    },
    Patch: {
      Shadow0: tx({ id: "Patch.Shadow0", atlas: 0, x: 853, y: 221, width: 127, height: 34 }),
      Splotch0: tx({ id: "Patch.Splotch0", atlas: 0, x: 257, y: 219, width: 243, height: 217 }),
    },
    Shapes: {
      LightSmall0: tx({ id: "Shapes.LightSmall0", atlas: 0, x: 981, y: 246, width: 19, height: 7 }),
      Square32: tx({ id: "Shapes.Square32", atlas: 0, x: 847, y: 281, width: 32, height: 32 }),
      VSmall0: tx({ id: "Shapes.VSmall0", atlas: 0, x: 1001, y: 0, width: 19, height: 13 }),
    },
    Stone: {
      Rock0: tx({ id: "Stone.Rock0", atlas: 0, x: 956, y: 256, width: 53, height: 24 }),
      Rock1: tx({ id: "Stone.Rock1", atlas: 0, x: 668, y: 277, width: 97, height: 48 }),
    },
    Treasures: {
      Bone0: tx({ id: "Treasures.Bone0", atlas: 0, x: 569, y: 277, width: 98, height: 76 }),
      Heart0: tx({ id: "Treasures.Heart0", atlas: 0, x: 501, y: 340, width: 55, height: 42 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
