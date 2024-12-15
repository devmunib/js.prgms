const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the traffic light color (Red, Yellow, Green): ", function(userInput) {
    // Convert input to lowercase for case-insensitive comparison
    const color = userInput.trim().toLowerCase();

    if (color === 'red') {
        console.log("Stop");
    } else if (color === 'yellow') {
        console.log("Slow Down");
    } else if (color === 'green') {
        console.log("Go");
    } else {
        console.log("Invalid Color");
    }

    rl.close(); // Close the readline interface
}); 