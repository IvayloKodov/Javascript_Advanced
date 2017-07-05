function solve(name, age, weight, height) {
    let personalInfo = {
        age: age,
        weight: weight,
        height: height
    }

    let BMI = Math.round(weight / Math.pow(height / 100, 2));

    let person = {
        name: name,
        personalInfo: personalInfo,
        BMI: BMI,
        status: getStatus(BMI)
    }

    function getStatus(BMI) {
        if (BMI <= 18.5) {
            return 'underweight';
        } else if (BMI > 18.5 && BMI < 25) {
            return 'normal';
        } else if (BMI >= 25 && BMI < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }

    if (person.status == 'obese') {
        person['recommendation'] = 'admission required';
    }

    return person;
}

console.log(solve("Peter", 29, 75, 182));

console.log(solve("Honey Boo Boo", 9, 57, 137));
