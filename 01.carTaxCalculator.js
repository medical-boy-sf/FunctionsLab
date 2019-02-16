function carTaxCalculator(power) {
    power = Number(power);

    if (power > 110) {
        console.log(`${(1.54 * power).toFixed(2)} lv.`);
    } else if (power > 74) {
        console.log(`${(1.38 * power).toFixed(2)} lv.`);
    } else if (power > 55) {
        console.log(`${(0.68 * power).toFixed(2)} lv.`);
    } else if (power > 37) {
        console.log(`${(0.5 * power).toFixed(2)} lv.`);
    } else {
        console.log(`${(0.43 * power).toFixed(2)} lv.`);
    }
}