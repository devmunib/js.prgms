const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter 1 to turn ON the light or 0 to turn OFF the light: ", function(userInput) {
    if (userInput === '1') {
        console.log("The light is ON");
    } else if (userInput === '0') {
        console.log("The light is OFF");
    } else {
        console.log("Invalid Input");
    }
    rl.close(); 
});