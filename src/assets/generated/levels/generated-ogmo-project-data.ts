// This file is generated.

const entityValues = {
  Block: null as unknown as { name: string; visible: boolean },
  Slope: null as unknown as { name: string; visible: boolean },
  Marker: null as unknown as { name: string; depth: number },
  Region: null as unknown as { name: string; depth: number },
  Book: null as unknown as { message: string; name: string },
  Acre: null as unknown as { name: string },
  Goon: null as unknown as { name: string; rank: number },
  Treasure: null as unknown as { name: string; kind: "GoldIdol" | "Bone" | "Skull" | "RingWithGreenStone" | "DrillUpgradeEnergy" | "DrillUpgradeRadius" | "DrillUpgradeSpeed" | "DrillUpgradeAttack" | "GoldenIdolHappy" | "Tea" | "InvisibleUnderwear" | "FishingPole" },
  DigSpot: null as unknown as { name: string },
};

export namespace OgmoProject {
  export namespace Entities {
    export type Values = typeof entityValues;
    export type Names = keyof Values;
  }
}
