function solve(typeVehicle, volumeOrKW, age) {
    volumeOrKW = Number(volumeOrKW);
    age = Number(age);

    switch (typeVehicle) {
        case "motorcycle":
            console.log(`${motorcycleTax(volumeOrKW).toFixed(2)} lv.`);
            break;
        case "car":
            console.log(`${(calculateCoefficient(age) * calculatePower(volumeOrKW)).toFixed(2)} lv.`);
            break;
    }


    function calculatePower(power) {
        if (power > 110) {
            return 1.54 * power;
        } else if (power > 74) {
            return 1.38 * power;
        } else if (power > 55) {
            return 0.68 * power;
        } else if (power > 37) {
            return 0.5 * power;
        } else {
            return 0.43 * power;
        }
    }

    function calculateCoefficient(age) {
        if (age > 14) {
            return 1;
        } else if (age > 5) {
            return 1.5;
        } else {
            return 2.8;
        }
    }
    
    function motorcycleTax(volume) {
        if (volume > 750) {
            return 125;
        } else if (volume > 490) {
            return 94;
        } else if (volume > 350) {
            return 63;
        } else if (volume > 250) {
            return 44;
        } else if (volume > 125) {
            return 31;
        } else {
            return 15;
        }
    }
}