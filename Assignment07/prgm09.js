const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function outfitSuggestions(weather) {
    switch (weather.toLowerCase()) {
        case 'sunny':
            return 'Wear sunglasses';
        case 'rainy':
            return 'Take an umbrella';
        case 'cold':
            return 'Wear a jacket';
        default:
            return 'Invalid weather input. Please enter Sunny, Rainy, or Cold.';
    }
}


rl.question("Enter the weather (Sunny, Rainy, or Cold): ", function(weatherInput) {
  
    const suggestion = outfitSuggestions(weatherInput);


    console.log(suggestion);

    rl.close(); 
});