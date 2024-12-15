const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Is the door open? (yes or no): ", function(doorInput) {
    
    rl.question("Is motion detected? (yes or no): ", function(motionInput) {
        
        if (doorInput === 'yes' || motionInput === 'yes') {
            console.log("Alarm Triggered");
        } else {
            console.log("All Safe");
        }

        rl.close(); 
    });
});