let balance = 100;

function fruitgame() {
    const resultDiv = document.getElementById("result");

    // Check if balance is 0
    if (balance <= 0) {
        resultDiv.innerHTML = `<p>Your balance is 0. You can't play anymore!</p>`;
        return;
    }

    // Images
    const fruit1 = document.getElementById("fruit1");
    const fruit2 = document.getElementById("fruit2");
    const fruit3 = document.getElementById("fruit3");

   
    const fruitImages = [
        "img/appelsiini.png", 
        "img/kirsikka.png",   
        "img/meloni.png"      
    ];

    // Generate 3 random numbers between 1 and 3
    const randomNumbers = [];
    for (let i = 0; i < 3; i++) {
        randomNumbers.push(Math.floor(Math.random() * 3) + 1);
    }

    // Update the fruit images based on the random numbers
    fruit1.src = fruitImages[randomNumbers[0] - 1];
    fruit2.src = fruitImages[randomNumbers[1] - 1];
    fruit3.src = fruitImages[randomNumbers[2] - 1];

    balance -= 1;

    // Update balance and result message
    if (randomNumbers[0] === randomNumbers[1] && randomNumbers[1] === randomNumbers[2]) {
        balance += 10; // All fruits match
        resultDiv.innerHTML = `<p>You have ${balance} euros</p><p>Jackpot! All fruits match!</p>`;
    } else if (randomNumbers[0] === randomNumbers[1] || randomNumbers[1] === randomNumbers[2] || randomNumbers[0] === randomNumbers[2]) {
        balance += 2; // Two fruits match
        resultDiv.innerHTML = `<p>You have ${balance} euros</p><p>You win 2€!</p>`;
    } else {
        resultDiv.innerHTML = `<p>You have ${balance} euros</p><p>Sorry, no win!</p>`;
    }

}