function solve(input, age) {
    input = Number(input);
    age = Number(age);
    let sum = calculatePower(input) * calculateCoefficient(age);

    console.log(`${sum.toFixed(2)} lv.`);

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
}