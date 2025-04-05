// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 19 }];

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
    Character: tx({ id: "Character", atlas: 0, x: 0, y: 0, width: 1000, height: 150 }),
    Dig: {
      Hole: tx({ id: "Dig.Hole", atlas: 0, x: 161, y: 280, width: 49, height: 47 }),
    },
    Foliage: {
      Bush0: tx({ id: "Foliage.Bush0", atlas: 0, x: 257, y: 151, width: 254, height: 125 }),
      Flower0: tx({ id: "Foliage.Flower0", atlas: 0, x: 987, y: 151, width: 36, height: 24 }),
      Grass0: tx({ id: "Foliage.Grass0", atlas: 0, x: 884, y: 176, width: 100, height: 43 }),
      Leaves0: tx({ id: "Foliage.Leaves0", atlas: 0, x: 418, y: 302, width: 51, height: 47 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 953, y: 263, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 257, y: 277, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 0, y: 280, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 884, y: 151, width: 102, height: 24 }),
      GoodBoy: tx({ id: "Font.GoodBoy", atlas: 0, x: 0, y: 151, width: 256, height: 128 }),
    },
    Patch: {
      Shadow0: tx({ id: "Patch.Shadow0", atlas: 0, x: 756, y: 151, width: 127, height: 34 }),
      Splotch0: tx({ id: "Patch.Splotch0", atlas: 0, x: 512, y: 151, width: 243, height: 217 }),
    },
    Shapes: {
      LightSmall0: tx({ id: "Shapes.LightSmall0", atlas: 0, x: 1001, y: 0, width: 19, height: 7 }),
      VSmall0: tx({ id: "Shapes.VSmall0", atlas: 0, x: 1001, y: 8, width: 19, height: 13 }),
    },
    Stone: {
      Rock0: tx({ id: "Stone.Rock0", atlas: 0, x: 418, y: 277, width: 53, height: 24 }),
      Rock1: tx({ id: "Stone.Rock1", atlas: 0, x: 855, y: 220, width: 97, height: 48 }),
    },
    Treasures: {
      Bone0: tx({ id: "Treasures.Bone0", atlas: 0, x: 756, y: 186, width: 98, height: 76 }),
      Heart0: tx({ id: "Treasures.Heart0", atlas: 0, x: 953, y: 220, width: 55, height: 42 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
