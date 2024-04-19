let min = 1;
let max = 100;
let input = document.getElementById('guess');
let submit = document.getElementById('submit');
let result = document.getElementById('result');
let attemptNumber = document.getElementById('attempt');
let attempts = 0;

let random = Math.ceil(Math.random() * (max - min));
console.log(random);

submit.onclick = function () {
    let guess = input.value;
    guess = Number(guess);
    attempts++;
    attemptNumber.textContent = `Number of Attempts: ${attempts}.`;
    if (guess == random) {
        result.textContent = 'You guessed it right!';
        window.alert(`It took you ${attempts} guesses to guess the number right.`)
    } 
    else {
        result.textContent = 'You guessed wrong. Try again!';
    }
}