const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the temperature in Celsius: ", function(userInput) {
    const temperature = parseFloat(userInput); // Converting input to a float value

    if (temperature <= 0) {
        console.log("Freezing");
    } else if (temperature <= 15) {
        console.log("Cold");
    } else if (temperature <= 30) {
        console.log("Warm");
    } else {
        console.log("Hot");
    }

    rl.close(); 
});