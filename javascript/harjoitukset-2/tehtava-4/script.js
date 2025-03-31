
const randomNumber = Math.floor(Math.random() * 100) + 1;
    const result= document.getElementById('result');
function guess(number) {
    
    number = parseInt(number, 10);

    if (number < 1 || number > 100) {
        result.innerHTML = 'Please enter a number between 1 and 100.';
        return;
    }
    
    if (number === randomNumber) {
        result.innerHTML= 'Congratulations! You guessed the correct number!';
        guessElement.value = '';
        return;
    }
    
    if (number < randomNumber) {
        result.innerHTML= 'Too low! Try again.';
    } else {
        result.innerHTML= 'Too high! Try again.';
    }
}