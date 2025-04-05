// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 12 }];

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
    Foliage: {
      Flower0: tx({ id: "Foliage.Flower0", atlas: 0, x: 216, y: 280, width: 36, height: 24 }),
      Grass0: tx({ id: "Foliage.Grass0", atlas: 0, x: 501, y: 151, width: 100, height: 43 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 161, y: 280, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 0, y: 280, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 0, y: 315, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 128, y: 350, width: 102, height: 24 }),
      GoodBoy: tx({ id: "Font.GoodBoy", atlas: 0, x: 0, y: 151, width: 256, height: 128 }),
    },
    Patch: {
      Shadow0: tx({ id: "Patch.Shadow0", atlas: 0, x: 0, y: 350, width: 127, height: 34 }),
      Splotch0: tx({ id: "Patch.Splotch0", atlas: 0, x: 257, y: 151, width: 243, height: 217 }),
    },
    Stone: {
      Rock0: tx({ id: "Stone.Rock0", atlas: 0, x: 161, y: 289, width: 53, height: 24 }),
      Rock1: tx({ id: "Stone.Rock1", atlas: 0, x: 602, y: 151, width: 97, height: 48 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
