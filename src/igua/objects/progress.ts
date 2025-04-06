function createInitialProgress() {
    return {
        energy: 100,
        energyMaximum: 100,
        energyBlockedSteps: 0,
        energyBlockedStepsMaximum: 30,
        life: 100,
        lifeMaximum: 100,
        money: 0,
        moneyMaximum: 1000, // TODO set to something that makes sense
        attackPower: 10,
        firsts: {
            everDrilled: false,
            everTookDamage: false,
        },
    };
}

export let progress = createInitialProgress();

export type Progress = typeof progress;
