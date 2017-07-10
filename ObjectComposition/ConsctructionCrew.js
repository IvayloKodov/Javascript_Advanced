function solve(worker) {
    if (worker.handsShaking === true) {
        let alcohol = 0.1 * worker.weight * worker.experience;
        worker.bloodAlcoholLevel += alcohol;
        worker.handsShaking = false;
    }

    return worker;
}

console.log(solve({
        weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));;