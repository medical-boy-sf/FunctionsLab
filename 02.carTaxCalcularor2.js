function carTaxCalculator2(power, age) {
    power = Number(power);
    age = Number(age);
    let coefficient = 0;

    if (age > 14) {
        coefficient = 1;
    } else if (age > 5) {
        coefficient = 1.5;
    } else {
        coefficient = 2.8;
    }

    if (power > 110) {
        console.log(`${(1.54 * power * coefficient).toFixed(2)} lv.`);
    } else if (power > 74) {
        console.log(`${(1.38 * power * coefficient).toFixed(2)} lv.`);
    } else if (power > 55) {
        console.log(`${(0.68 * power * coefficient).toFixed(2)} lv.`);
    } else if (power > 37) {
        console.log(`${(0.5 * power * coefficient).toFixed(2)} lv.`);
    } else {
        console.log(`${(0.43 * power * coefficient).toFixed(2)} lv.`);
    }
}