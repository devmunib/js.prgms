const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", function(firstInput) {
    const firstNumber = parseFloat(firstInput);

    rl.question("Enter the second number: ", function(secondInput) {
        const secondNumber = parseFloat(secondInput);

        if (firstNumber > secondNumber) {
            console.log(`The larger number is: ${firstNumber}`);
        } else if (secondNumber > firstNumber) {
            console.log(`The larger number is: ${secondNumber}`);
        } else {
            console.log("Both numbers are equal.");
        }

        rl.close();
    });
});