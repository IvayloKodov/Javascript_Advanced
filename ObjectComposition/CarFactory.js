function solve(car) {
    let engine = {};

    if (car.power <= 90) {
        engine = {power: 90, volume: 1800}
    } else if (car.power > 90 && car.power <= 120) {
        engine = {power: 120, volume: 2400};
    } else {
        engine = {power: 200, volume: 3500};
    }

    let carriage = {};
    if (car.carriage == 'hatchback') {
        carriage = {type: 'hatchback', color: car.color};
    } else {
        carriage = {type: 'coupe', color: car.color};
    }

    let wheelSize = car.wheelsize % 2 == 1 ? car.wheelsize : Math.floor(car.wheelsize-1);

    let wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    let newCar = {
        model: car.model,
        engine,
        carriage,
        wheels
    };

    return newCar;
}

console.log(solve({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));

