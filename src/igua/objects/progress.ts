import { Empty } from "../../lib/types/empty";
import { TreasureKind } from "./obj-treasure";

function createInitialProgress() {
    const upgrades = {
        life: 0,
        drill: {
            energy: 0,
            attack: 0,
            radius: 0,
            speed: 0,
        },
        nude: false,
    };

    return {
        deaths: 0,
        energy: 100,
        get energyMaximum() {
            return 100 + upgrades.drill.energy * 50;
        },
        energyBlockedSteps: 0,
        energyBlockedStepsMaximum: 30,
        life: 50,
        get lifeMaximum() {
            return 50 + upgrades.life * 50;
        },
        money: 0,
        moneyMaximum: 1000, // TODO set to something that makes sense
        get attackPower() {
            return 10 + upgrades.drill.attack * 5;
        },
        get maxHoleRadius() {
            return 32 + upgrades.drill.radius * 12;
        },
        get drillingMovementSpeed() {
            return 3.67 + upgrades.drill.speed;
        },
        get holeCreationDeltaTime() {
            return 1 - upgrades.drill.speed * 0.2;
        },
        firsts: {
            everDrilled: false,
            everTookDamage: false,
        },
        upgrades,
        treasures: Empty<TreasureKind>(),
    };
}

export let progress = createInitialProgress();

export type Progress = typeof progress;
