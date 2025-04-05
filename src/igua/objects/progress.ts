function createInitialProgress() {
    return {
        energy: 100,
        energyMaximum: 100,
        energyBlockedSteps: 0,
        energyBlockedStepsMaximum: 30,
        firsts: {
            everDrilled: false,
        },
    };
}

export let progress = createInitialProgress();
