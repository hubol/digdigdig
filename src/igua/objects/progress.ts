function createInitialProgress() {
    return {
        energy: 100,
        energyMaximum: 100,
        energyBlockedSteps: 0,
        energyBlockedStepsMaximum: 30,
        life: 100,
        lifeMaximum: 100,
        attackPower: 10,
        firsts: {
            everDrilled: false,
            everTookDamage: false,
        },
    };
}

export let progress = createInitialProgress();

export type Progress = typeof progress;
