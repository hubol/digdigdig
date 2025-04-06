// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 79 }];

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
    CharacterShadowSmall: tx({ id: "CharacterShadowSmall", atlas: 0, x: 2419, y: 180, width: 47, height: 13 }),
    CharacterShadow: tx({ id: "CharacterShadow", atlas: 0, x: 2338, y: 180, width: 80, height: 19 }),
    Character: tx({ id: "Character", atlas: 0, x: 2683, y: 0, width: 1000, height: 150 }),
    Choose: {
      Arrow: tx({ id: "Choose.Arrow", atlas: 0, x: 3417, y: 612, width: 67, height: 120 }),
      Cloud: tx({ id: "Choose.Cloud", atlas: 0, x: 3610, y: 151, width: 216, height: 41 }),
      Otherwise: tx({ id: "Choose.Otherwise", atlas: 0, x: 3283, y: 378, width: 177, height: 68 }),
      Reroll: tx({ id: "Choose.Reroll", atlas: 0, x: 3684, y: 0, width: 316, height: 52 }),
      Title: tx({ id: "Choose.Title", atlas: 0, x: 3684, y: 53, width: 280, height: 67 }),
    },
    Dig: {
      Hole: tx({ id: "Dig.Hole", atlas: 0, x: 4039, y: 572, width: 49, height: 47 }),
      Mystery: tx({ id: "Dig.Mystery", atlas: 0, x: 3026, y: 378, width: 256, height: 256 }),
    },
    Effects: {
      Release0: tx({ id: "Effects.Release0", atlas: 0, x: 0, y: 0, width: 2682, height: 179 }),
      Release1: tx({ id: "Effects.Release1", atlas: 0, x: 0, y: 180, width: 2235, height: 179 }),
    },
    Enemy: {
      GoonHurt: tx({ id: "Enemy.GoonHurt", atlas: 0, x: 3987, y: 197, width: 92, height: 141 }),
      GoonSpell: tx({ id: "Enemy.GoonSpell", atlas: 0, x: 2236, y: 344, width: 480, height: 78 }),
      Goon: tx({ id: "Enemy.Goon", atlas: 0, x: 2236, y: 202, width: 736, height: 141 }),
    },
    Foliage: {
      Bush0: tx({ id: "Foliage.Bush0", atlas: 0, x: 3540, y: 483, width: 254, height: 125 }),
      DeadBush0: tx({ id: "Foliage.DeadBush0", atlas: 0, x: 3485, y: 702, width: 34, height: 51 }),
      DeadBush1: tx({ id: "Foliage.DeadBush1", atlas: 0, x: 3955, y: 156, width: 26, height: 42 }),
      Flower0: tx({ id: "Foliage.Flower0", atlas: 0, x: 3787, y: 121, width: 36, height: 24 }),
      Grass0: tx({ id: "Foliage.Grass0", atlas: 0, x: 3964, y: 701, width: 100, height: 43 }),
      Grass1: tx({ id: "Foliage.Grass1", atlas: 0, x: 2900, y: 344, width: 47, height: 25 }),
      Grass2: tx({ id: "Foliage.Grass2", atlas: 0, x: 2236, y: 180, width: 101, height: 14 }),
      Leaves0: tx({ id: "Foliage.Leaves0", atlas: 0, x: 4039, y: 524, width: 51, height: 47 }),
      PineTree0: tx({ id: "Foliage.PineTree0", atlas: 0, x: 3987, y: 339, width: 65, height: 124 }),
      Trunk0: tx({ id: "Foliage.Trunk0", atlas: 0, x: 3474, y: 267, width: 11, height: 84 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 3610, y: 193, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 3283, y: 447, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 3827, y: 121, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 3684, y: 121, width: 102, height: 24 }),
      GoodBoy: tx({ id: "Font.GoodBoy", atlas: 0, x: 3283, y: 483, width: 256, height: 128 }),
      OldMaiden: tx({ id: "Font.OldMaiden", atlas: 0, x: 2717, y: 378, width: 308, height: 208 }),
      Scribdig: tx({ id: "Font.Scribdig", atlas: 0, x: 2973, y: 202, width: 512, height: 64 }),
    },
    Hints: {
      Acre: tx({ id: "Hints.Acre", atlas: 0, x: 3486, y: 202, width: 500, height: 280 }),
      ArrowLong: tx({ id: "Hints.ArrowLong", atlas: 0, x: 4053, y: 339, width: 34, height: 118 }),
      ArrowMedium: tx({ id: "Hints.ArrowMedium", atlas: 0, x: 3965, y: 53, width: 34, height: 61 }),
      ArrowPerspective0: tx({ id: "Hints.ArrowPerspective0", atlas: 0, x: 4078, y: 817, width: 18, height: 23 }),
      Arrow: tx({ id: "Hints.Arrow", atlas: 0, x: 2948, y: 344, width: 24, height: 17 }),
      Book: tx({ id: "Hints.Book", atlas: 0, x: 3850, y: 701, width: 113, height: 68 }),
      Cross: tx({ id: "Hints.Cross", atlas: 0, x: 88, y: 451, width: 60, height: 53 }),
      LookEast: tx({ id: "Hints.LookEast", atlas: 0, x: 4027, y: 863, width: 69, height: 44 }),
      Move: tx({ id: "Hints.Move", atlas: 0, x: 262, y: 360, width: 75, height: 27 }),
      NothingHere: tx({ id: "Hints.NothingHere", atlas: 0, x: 0, y: 409, width: 87, height: 44 }),
      Wasd: tx({ id: "Hints.Wasd", atlas: 0, x: 4027, y: 908, width: 68, height: 50 }),
      Worthless: tx({ id: "Hints.Worthless", atlas: 0, x: 2717, y: 344, width: 182, height: 33 }),
    },
    Hud: {
      Book: tx({ id: "Hud.Book", atlas: 0, x: 2973, y: 267, width: 500, height: 110 }),
      DamageFresh: tx({ id: "Hud.DamageFresh", atlas: 0, x: 3723, y: 609, width: 64, height: 64 }),
      Damage: tx({ id: "Hud.Damage", atlas: 0, x: 262, y: 388, width: 64, height: 64 }),
      EnergyBar: tx({ id: "Hud.EnergyBar", atlas: 0, x: 3987, y: 464, width: 109, height: 16 }),
      Energy: tx({ id: "Hud.Energy", atlas: 0, x: 3723, y: 674, width: 48, height: 22 }),
      Life: tx({ id: "Hud.Life", atlas: 0, x: 4065, y: 0, width: 30, height: 22 }),
      Money: tx({ id: "Hud.Money", atlas: 0, x: 2467, y: 180, width: 46, height: 21 }),
      TreasureMessage: tx({ id: "Hud.TreasureMessage", atlas: 0, x: 2683, y: 151, width: 926, height: 50 }),
    },
    Misc: {
      LightPost: tx({ id: "Misc.LightPost", atlas: 0, x: 4001, y: 0, width: 63, height: 196 }),
      WaterLine: tx({ id: "Misc.WaterLine", atlas: 0, x: 4029, y: 804, width: 63, height: 12 }),
    },
    Patch: {
      Blob0: tx({ id: "Patch.Blob0", atlas: 0, x: 3540, y: 609, width: 182, height: 172 }),
      Shadow0: tx({ id: "Patch.Shadow0", atlas: 0, x: 3827, y: 156, width: 127, height: 34 }),
      Splotch0: tx({ id: "Patch.Splotch0", atlas: 0, x: 3795, y: 483, width: 243, height: 217 }),
    },
    Shapes: {
      LightSmall0: tx({ id: "Shapes.LightSmall0", atlas: 0, x: 3520, y: 702, width: 19, height: 7 }),
      LightSmall1: tx({ id: "Shapes.LightSmall1", atlas: 0, x: 4089, y: 572, width: 7, height: 9 }),
      Square32: tx({ id: "Shapes.Square32", atlas: 0, x: 3928, y: 770, width: 32, height: 32 }),
      VSmall0: tx({ id: "Shapes.VSmall0", atlas: 0, x: 3520, y: 710, width: 19, height: 13 }),
    },
    Stone: {
      BrickWalkway0: tx({ id: "Stone.BrickWalkway0", atlas: 0, x: 3723, y: 701, width: 126, height: 45 }),
      Headstone0: tx({ id: "Stone.Headstone0", atlas: 0, x: 181, y: 360, width: 80, height: 60 }),
      Rock0: tx({ id: "Stone.Rock0", atlas: 0, x: 3485, y: 677, width: 53, height: 24 }),
      Rock1: tx({ id: "Stone.Rock1", atlas: 0, x: 0, y: 360, width: 97, height: 48 }),
      Wall0: tx({ id: "Stone.Wall0", atlas: 0, x: 3283, y: 612, width: 133, height: 113 }),
      Wall1: tx({ id: "Stone.Wall1", atlas: 0, x: 3723, y: 747, width: 103, height: 109 }),
    },
    Treasures: {
      Bone0: tx({ id: "Treasures.Bone0", atlas: 0, x: 3928, y: 863, width: 98, height: 76 }),
      Bone: tx({ id: "Treasures.Bone", atlas: 0, x: 181, y: 421, width: 62, height: 60 }),
      DrillUpgrade0: tx({ id: "Treasures.DrillUpgrade0", atlas: 0, x: 3964, y: 745, width: 100, height: 58 }),
      DrillUpgrade1: tx({ id: "Treasures.DrillUpgrade1", atlas: 0, x: 3827, y: 770, width: 100, height: 58 }),
      DrillUpgrade2: tx({ id: "Treasures.DrillUpgrade2", atlas: 0, x: 3928, y: 804, width: 100, height: 58 }),
      DrillUpgrade3: tx({ id: "Treasures.DrillUpgrade3", atlas: 0, x: 3827, y: 829, width: 100, height: 58 }),
      GoldenIdolHappy: tx({ id: "Treasures.GoldenIdolHappy", atlas: 0, x: 98, y: 360, width: 82, height: 90 }),
      GoldenIdol: tx({ id: "Treasures.GoldenIdol", atlas: 0, x: 3485, y: 612, width: 50, height: 64 }),
      Heart0: tx({ id: "Treasures.Heart0", atlas: 0, x: 4039, y: 481, width: 55, height: 42 }),
      RingWithGreenStone: tx({ id: "Treasures.RingWithGreenStone", atlas: 0, x: 3444, y: 447, width: 34, height: 34 }),
      Skull: tx({ id: "Treasures.Skull", atlas: 0, x: 338, y: 360, width: 74, height: 46 }),
      Tea: tx({ id: "Treasures.Tea", atlas: 0, x: 4029, y: 817, width: 48, height: 38 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
