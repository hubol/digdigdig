// This file is generated

async function sfxs<T>(sfx: (ogg: string) => Promise<T>) {
  const sounds = await Promise.all(
    [
      "blockage removed.ogg",
      "enemy die.ogg",
      "enemy take damage.ogg",
      "player create hole.ogg",
      "player drill.ogg",
      "player enter drill mode.ogg",
      "player exit drill mode.ogg",
      "player explain treasure.ogg",
      "player line correction step 0.ogg",
      "player line correction step 1.ogg",
      "player respawn.ogg",
      "player step 0.ogg",
      "player step 1.ogg",
      "player take damage.ogg",
      "show message.ogg",
    ].map(sfx),
  );
  return {
    BlockageRemoved: sounds[0],
    EnemyDie: sounds[1],
    EnemyTakeDamage: sounds[2],
    PlayerCreateHole: sounds[3],
    PlayerDrill: sounds[4],
    PlayerEnterDrillMode: sounds[5],
    PlayerExitDrillMode: sounds[6],
    PlayerExplainTreasure: sounds[7],
    PlayerLineCorrectionStep0: sounds[8],
    PlayerLineCorrectionStep1: sounds[9],
    PlayerRespawn: sounds[10],
    PlayerStep0: sounds[11],
    PlayerStep1: sounds[12],
    PlayerTakeDamage: sounds[13],
    ShowMessage: sounds[14],
  };
}

export const GeneratedSfxData = {
  sfxs,
};
