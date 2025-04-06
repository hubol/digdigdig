// This file is generated

const atlases = [{ url: require("./atlas0.png"), texturesCount: 110 }];

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
    CharacterNude: tx({ id: "CharacterNude", atlas: 0, x: 3714, y: 718, width: 300, height: 150 }),
    CharacterShadowSmall: tx({ id: "CharacterShadowSmall", atlas: 0, x: 4018, y: 1368, width: 47, height: 13 }),
    CharacterShadow: tx({ id: "CharacterShadow", atlas: 0, x: 4015, y: 706, width: 80, height: 19 }),
    Character: tx({ id: "Character", atlas: 0, x: 2683, y: 0, width: 1000, height: 150 }),
    Characters: {
      BatherTub: tx({ id: "Characters.BatherTub", atlas: 0, x: 3684, y: 53, width: 223, height: 95 }),
      Bather: tx({ id: "Characters.Bather", atlas: 0, x: 0, y: 360, width: 2200, height: 159 }),
    },
    Choose: {
      Arrow: tx({ id: "Choose.Arrow", atlas: 0, x: 4004, y: 585, width: 67, height: 120 }),
      Cloud: tx({ id: "Choose.Cloud", atlas: 0, x: 3857, y: 1311, width: 216, height: 41 }),
      Otherwise: tx({ id: "Choose.Otherwise", atlas: 0, x: 3218, y: 455, width: 177, height: 68 }),
      Reroll: tx({ id: "Choose.Reroll", atlas: 0, x: 3684, y: 0, width: 316, height: 52 }),
      Title: tx({ id: "Choose.Title", atlas: 0, x: 3238, y: 344, width: 280, height: 67 }),
    },
    Dig: {
      Hole: tx({ id: "Dig.Hole", atlas: 0, x: 559, y: 559, width: 49, height: 47 }),
      Mystery: tx({ id: "Dig.Mystery", atlas: 0, x: 3158, y: 927, width: 256, height: 256 }),
    },
    Effects: {
      Release0: tx({ id: "Effects.Release0", atlas: 0, x: 0, y: 0, width: 2682, height: 179 }),
      Release1: tx({ id: "Effects.Release1", atlas: 0, x: 0, y: 180, width: 2235, height: 179 }),
    },
    Enemy: {
      EnemyWall: tx({ id: "Enemy.EnemyWall", atlas: 0, x: 3610, y: 151, width: 458, height: 37 }),
      GoonHurt: tx({ id: "Enemy.GoonHurt", atlas: 0, x: 4002, y: 1388, width: 92, height: 141 }),
      GoonSpell: tx({ id: "Enemy.GoonSpell", atlas: 0, x: 2737, y: 455, width: 480, height: 78 }),
      GoonStretch: tx({ id: "Enemy.GoonStretch", atlas: 0, x: 2973, y: 202, width: 552, height: 141 }),
      Goon: tx({ id: "Enemy.Goon", atlas: 0, x: 2236, y: 202, width: 736, height: 141 }),
      PencilProjectile: tx({ id: "Enemy.PencilProjectile", atlas: 0, x: 4072, y: 585, width: 19, height: 52 }),
      SpiderHurt: tx({ id: "Enemy.SpiderHurt", atlas: 0, x: 559, y: 520, width: 58, height: 38 }),
      Spider: tx({ id: "Enemy.Spider", atlas: 0, x: 3238, y: 412, width: 174, height: 38 }),
    },
    Foliage: {
      Bush0: tx({ id: "Foliage.Bush0", atlas: 0, x: 3415, y: 1056, width: 254, height: 125 }),
      DeadBush0: tx({ id: "Foliage.DeadBush0", atlas: 0, x: 3471, y: 589, width: 34, height: 51 }),
      DeadBush1: tx({ id: "Foliage.DeadBush1", atlas: 0, x: 71, y: 628, width: 26, height: 42 }),
      Flower0: tx({ id: "Foliage.Flower0", atlas: 0, x: 3672, y: 994, width: 36, height: 24 }),
      Grass0: tx({ id: "Foliage.Grass0", atlas: 0, x: 3978, y: 963, width: 100, height: 43 }),
      Grass1: tx({ id: "Foliage.Grass1", atlas: 0, x: 4039, y: 232, width: 47, height: 25 }),
      Grass2: tx({ id: "Foliage.Grass2", atlas: 0, x: 2236, y: 180, width: 101, height: 14 }),
      Leaves0: tx({ id: "Foliage.Leaves0", atlas: 0, x: 618, y: 520, width: 51, height: 47 }),
      PineTree0: tx({ id: "Foliage.PineTree0", atlas: 0, x: 3405, y: 589, width: 65, height: 124 }),
      Trunk0: tx({ id: "Foliage.Trunk0", atlas: 0, x: 4074, y: 1300, width: 11, height: 84 }),
    },
    Font: {
      Diggit: tx({ id: "Font.Diggit", atlas: 0, x: 3158, y: 917, width: 54, height: 8 }),
      ErotixLight: tx({ id: "Font.ErotixLight", atlas: 0, x: 3908, y: 94, width: 160, height: 34 }),
      Erotix: tx({ id: "Font.Erotix", atlas: 0, x: 3857, y: 1353, width: 160, height: 34 }),
      Flaccid: tx({ id: "Font.Flaccid", atlas: 0, x: 3978, y: 938, width: 102, height: 24 }),
      GoodBoy: tx({ id: "Font.GoodBoy", atlas: 0, x: 3415, y: 927, width: 256, height: 128 }),
      OldMaiden: tx({ id: "Font.OldMaiden", atlas: 0, x: 3405, y: 718, width: 308, height: 208 }),
      Scribdig: tx({ id: "Font.Scribdig", atlas: 0, x: 3526, y: 202, width: 512, height: 64 }),
    },
    Hints: {
      Acre: tx({ id: "Hints.Acre", atlas: 0, x: 3526, y: 267, width: 500, height: 280 }),
      ArrowLong: tx({ id: "Hints.ArrowLong", atlas: 0, x: 2201, y: 360, width: 34, height: 118 }),
      ArrowMedium: tx({ id: "Hints.ArrowMedium", atlas: 0, x: 2201, y: 479, width: 34, height: 61 }),
      ArrowPerspective0: tx({ id: "Hints.ArrowPerspective0", atlas: 0, x: 4072, y: 679, width: 18, height: 23 }),
      Arrow: tx({ id: "Hints.Arrow", atlas: 0, x: 4072, y: 638, width: 24, height: 17 }),
      Book: tx({ id: "Hints.Book", atlas: 0, x: 3978, y: 869, width: 113, height: 68 }),
      ConcentricCircles: tx({ id: "Hints.ConcentricCircles", atlas: 0, x: 2737, y: 534, width: 420, height: 418 }),
      Cross1: tx({ id: "Hints.Cross1", atlas: 0, x: 3672, y: 1019, width: 35, height: 29 }),
      Cross2: tx({ id: "Hints.Cross2", atlas: 0, x: 3413, y: 429, width: 21, height: 19 }),
      Cross: tx({ id: "Hints.Cross", atlas: 0, x: 498, y: 520, width: 60, height: 53 }),
      Digdigdig: tx({ id: "Hints.Digdigdig", atlas: 0, x: 3218, y: 524, width: 36, height: 9 }),
      Filler0: tx({ id: "Hints.Filler0", atlas: 0, x: 2236, y: 344, width: 500, height: 280 }),
      FinalWorld: tx({ id: "Hints.FinalWorld", atlas: 0, x: 3908, y: 53, width: 188, height: 40 }),
      LookEast: tx({ id: "Hints.LookEast", atlas: 0, x: 4027, y: 464, width: 69, height: 44 }),
      ManyArrows: tx({ id: "Hints.ManyArrows", atlas: 0, x: 3509, y: 548, width: 342, height: 169 }),
      Move: tx({ id: "Hints.Move", atlas: 0, x: 4015, y: 787, width: 75, height: 27 }),
      NothingHere: tx({ id: "Hints.NothingHere", atlas: 0, x: 4001, y: 0, width: 87, height: 44 }),
      Soap: tx({ id: "Hints.Soap", atlas: 0, x: 3415, y: 1182, width: 207, height: 236 }),
      Thanks: tx({ id: "Hints.Thanks", atlas: 0, x: 3158, y: 534, width: 350, height: 54 }),
      Tictactoe: tx({ id: "Hints.Tictactoe", atlas: 0, x: 3714, y: 869, width: 263, height: 223 }),
      Timestamp: tx({ id: "Hints.Timestamp", atlas: 0, x: 3852, y: 548, width: 233, height: 36 }),
      Wasd: tx({ id: "Hints.Wasd", atlas: 0, x: 301, y: 520, width: 68, height: 50 }),
      Worthless: tx({ id: "Hints.Worthless", atlas: 0, x: 3914, y: 1093, width: 182, height: 33 }),
    },
    Hud: {
      Book: tx({ id: "Hud.Book", atlas: 0, x: 2737, y: 344, width: 500, height: 110 }),
      DamageFresh: tx({ id: "Hud.DamageFresh", atlas: 0, x: 370, y: 520, width: 64, height: 64 }),
      Damage: tx({ id: "Hud.Damage", atlas: 0, x: 301, y: 571, width: 64, height: 64 }),
      EnergyBar: tx({ id: "Hud.EnergyBar", atlas: 0, x: 3413, y: 412, width: 109, height: 16 }),
      Energy: tx({ id: "Hud.Energy", atlas: 0, x: 4032, y: 1066, width: 48, height: 22 }),
      Life: tx({ id: "Hud.Life", atlas: 0, x: 3623, y: 1237, width: 30, height: 22 }),
      Money: tx({ id: "Hud.Money", atlas: 0, x: 3623, y: 1182, width: 46, height: 21 }),
      TreasureMessage: tx({ id: "Hud.TreasureMessage", atlas: 0, x: 2683, y: 151, width: 926, height: 50 }),
    },
    Misc: {
      FishingRodInUse: tx({ id: "Misc.FishingRodInUse", atlas: 0, x: 3852, y: 585, width: 151, height: 127 }),
      LightPost: tx({ id: "Misc.LightPost", atlas: 0, x: 4027, y: 267, width: 63, height: 196 }),
      WaterLine: tx({ id: "Misc.WaterLine", atlas: 0, x: 3610, y: 189, width: 63, height: 12 }),
    },
    Patch: {
      Blob0: tx({ id: "Patch.Blob0", atlas: 0, x: 3914, y: 1127, width: 182, height: 172 }),
      LumpySquare0: tx({ id: "Patch.LumpySquare0", atlas: 0, x: 3623, y: 1311, width: 233, height: 147 }),
      Shadow0: tx({ id: "Patch.Shadow0", atlas: 0, x: 3396, y: 451, width: 127, height: 34 }),
      Splotch0: tx({ id: "Patch.Splotch0", atlas: 0, x: 3670, y: 1093, width: 243, height: 217 }),
    },
    Shapes: {
      Confetti64: tx({ id: "Shapes.Confetti64", atlas: 0, x: 181, y: 597, width: 64, height: 64 }),
      Ellipse0: tx({ id: "Shapes.Ellipse0", atlas: 0, x: 4018, y: 1353, width: 53, height: 14 }),
      LightSmall0: tx({ id: "Shapes.LightSmall0", atlas: 0, x: 4001, y: 45, width: 19, height: 7 }),
      LightSmall1: tx({ id: "Shapes.LightSmall1", atlas: 0, x: 4089, y: 0, width: 7, height: 9 }),
      Spurt: tx({ id: "Shapes.Spurt", atlas: 0, x: 3158, y: 589, width: 246, height: 327 }),
      Square32: tx({ id: "Shapes.Square32", atlas: 0, x: 3623, y: 1204, width: 32, height: 32 }),
      VSmall0: tx({ id: "Shapes.VSmall0", atlas: 0, x: 181, y: 579, width: 19, height: 13 }),
      Zigzag0: tx({ id: "Shapes.Zigzag0", atlas: 0, x: 3471, y: 682, width: 37, height: 27 }),
    },
    Stone: {
      BrickWalkway0: tx({ id: "Stone.BrickWalkway0", atlas: 0, x: 3396, y: 486, width: 126, height: 45 }),
      Headstone0: tx({ id: "Stone.Headstone0", atlas: 0, x: 4015, y: 726, width: 80, height: 60 }),
      Rock0: tx({ id: "Stone.Rock0", atlas: 0, x: 3978, y: 1066, width: 53, height: 24 }),
      Rock1: tx({ id: "Stone.Rock1", atlas: 0, x: 0, y: 579, width: 97, height: 48 }),
      Wall0: tx({ id: "Stone.Wall0", atlas: 0, x: 3857, y: 1423, width: 133, height: 113 }),
      Wall1: tx({ id: "Stone.Wall1", atlas: 0, x: 3991, y: 1530, width: 103, height: 109 }),
    },
    Treasures: {
      Bone0: tx({ id: "Treasures.Bone0", atlas: 0, x: 202, y: 520, width: 98, height: 76 }),
      Bone: tx({ id: "Treasures.Bone", atlas: 0, x: 435, y: 520, width: 62, height: 60 }),
      Diamond: tx({ id: "Treasures.Diamond", atlas: 0, x: 4072, y: 656, width: 24, height: 22 }),
      DrillUpgrade0: tx({ id: "Treasures.DrillUpgrade0", atlas: 0, x: 0, y: 628, width: 70, height: 58 }),
      DrillUpgrade1: tx({ id: "Treasures.DrillUpgrade1", atlas: 0, x: 3978, y: 1007, width: 100, height: 58 }),
      DrillUpgrade2: tx({ id: "Treasures.DrillUpgrade2", atlas: 0, x: 0, y: 520, width: 100, height: 58 }),
      DrillUpgrade3: tx({ id: "Treasures.DrillUpgrade3", atlas: 0, x: 101, y: 520, width: 100, height: 58 }),
      FishingPole: tx({ id: "Treasures.FishingPole", atlas: 0, x: 3857, y: 1388, width: 144, height: 34 }),
      GiftCard: tx({ id: "Treasures.GiftCard", atlas: 0, x: 3908, y: 129, width: 28, height: 16 }),
      GoldenIdolHappy: tx({ id: "Treasures.GoldenIdolHappy", atlas: 0, x: 98, y: 579, width: 82, height: 90 }),
      GoldenIdol: tx({ id: "Treasures.GoldenIdol", atlas: 0, x: 246, y: 597, width: 50, height: 64 }),
      Heart0: tx({ id: "Treasures.Heart0", atlas: 0, x: 4039, y: 189, width: 55, height: 42 }),
      InvisibleUnderwear: tx({ id: "Treasures.InvisibleUnderwear", atlas: 0, x: 4027, y: 509, width: 60, height: 36 }),
      RingWithGreenStone: tx({ id: "Treasures.RingWithGreenStone", atlas: 0, x: 3670, y: 1056, width: 34, height: 34 }),
      SilverMedal: tx({ id: "Treasures.SilverMedal", atlas: 0, x: 3672, y: 927, width: 40, height: 66 }),
      Skull: tx({ id: "Treasures.Skull", atlas: 0, x: 4015, y: 815, width: 74, height: 46 }),
      Soap: tx({ id: "Treasures.Soap", atlas: 0, x: 3471, y: 641, width: 32, height: 40 }),
      Tea: tx({ id: "Treasures.Tea", atlas: 0, x: 498, y: 574, width: 48, height: 38 }),
    },
  };
}

export const GeneratedTextureData = {
  atlases,
  txs,
};
