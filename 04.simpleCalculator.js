function solve(number1, number2, operation) {
    number1 = Number(number1);
    number2 = Number(number2);

    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let divide = (a, b) => a / b;
    let multiply = (a, b) => a * b;

    switch (operation) {
        case "add":
            console.log(add(number1, number2));
            break;
        case "subtract":
            console.log(subtract(number1, number2));
            break;
        case "multiply":
            console.log(multiply(number1, number2));
            break;
        case "divide":
            console.log(divide(number1, number2));
    }
}