const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Player 1, enter your choice (rock, paper, or scissors): ", function(player1Input) {
    
    rl.question("Player 2, enter your choice (rock, paper, or scissors): ", function(player2Input) {
        // check the winner
        if (player1Input === player2Input) {
            console.log("It's a Tie!");
        } else if (
            (player1Input === 'rock' && player2Input === 'scissors') ||
            (player1Input === 'paper' && player2Input === 'rock') ||
            (player1Input === 'scissors' && player2Input === 'paper')
        ) {
            console.log("Player 1 Wins!");
        } else {
            console.log("Player 2 Wins!");
        }

        rl.close(); // Close the readline interface
    });
});