// This file is generated

async function sfxs<T>(sfx: (ogg: string) => Promise<T>) {
  const sounds = await Promise.all(
    [
      "blockage removed.ogg",
      "enemy die.ogg",
      "enemy take damage.ogg",
      "goon notice.ogg",
      "goon pencil burst.ogg",
      "goon spell charge.ogg",
      "goon spell release.ogg",
      "goon stretch.ogg",
      "goon unstretch.ogg",
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
      "spider reveal.ogg",
      "spider throw.ogg",
    ].map(sfx),
  );
  return {
    BlockageRemoved: sounds[0],
    EnemyDie: sounds[1],
    EnemyTakeDamage: sounds[2],
    GoonNotice: sounds[3],
    GoonPencilBurst: sounds[4],
    GoonSpellCharge: sounds[5],
    GoonSpellRelease: sounds[6],
    GoonStretch: sounds[7],
    GoonUnstretch: sounds[8],
    PlayerCreateHole: sounds[9],
    PlayerDrill: sounds[10],
    PlayerEnterDrillMode: sounds[11],
    PlayerExitDrillMode: sounds[12],
    PlayerExplainTreasure: sounds[13],
    PlayerLineCorrectionStep0: sounds[14],
    PlayerLineCorrectionStep1: sounds[15],
    PlayerRespawn: sounds[16],
    PlayerStep0: sounds[17],
    PlayerStep1: sounds[18],
    PlayerTakeDamage: sounds[19],
    ShowMessage: sounds[20],
    SpiderReveal: sounds[21],
    SpiderThrow: sounds[22],
  };
}

export const GeneratedSfxData = {
  sfxs,
};
