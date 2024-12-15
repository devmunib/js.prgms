const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if the password contains numbers or special characters
function containsNumbersOrSpecialChars(password) {
    const hasNumber = /\d/; // Regular expression to check for numbers
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // Regular expression to check for special characters
    return hasNumber.test(password) || hasSpecialChar.test(password);
}

// Ask for the password input
rl.question("Enter your password: ", function(password) {
    const length = password.length;

    // Check password strength based on length
    if (length >= 8) {
        console.log("Strong Password");
    } else if (length >= 5) {
        console.log("Moderate Password");
    } else {
        console.log("Weak Password");
    }

    rl.close(); // Close the readline interface
}); 