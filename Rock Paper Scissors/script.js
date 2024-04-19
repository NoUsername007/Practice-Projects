let playerScore = 0;
let computerScore = 0;

function play (move) {
    const randomNumber = Math.random()*3;
    const playerMove = move;
    const computerMoveOutput = document.getElementById('computerMove')
    const playerMoveOutput = document.getElementById('playerMove')
    const computerScoreOutput = document.getElementById('red')
    const playerScoreOutput = document.getElementById('green')
    const result = document.getElementById('result')
    let computerMove;


    if (randomNumber <= 1 ){
        computerMove = 'rock' 
    } else if (randomNumber <= 2){
        computerMove = 'paper'
    } else {
        computerMove = 'scissors'
    }

    if (computerMove === 'scissors'){
        if (playerMove === 'scissors') {
            result.textContent = "draw"
        } else if (playerMove === 'paper'){
            result.textContent = "you lose..."
        } else {
            result.textContent = "you win!"
        } 
    } 

    if (computerMove === 'rock') {
        if (playerMove === 'scissors') {
            result.textContent = "you lose..."
        } else if (playerMove === 'paper') {
            result.textContent = "you win!"
        } else {
            result.textContent = "draw"
        }
    }

    if (computerMove === 'paper') {
        if (playerMove === 'scissors') {
            result.textContent = "you win!"
        } else if (playerMove === 'paper') {
            result.textContent = "It's a draw"
        } else {
            result.textContent = "you lose..."
        }
    }

    playerMoveOutput.textContent = move;
    computerMoveOutput.textContent = computerMove;

    if (result.textContent === 'you win!') {
        playerScore++
        result.style.color = 'hsl(130, 84%, 54%)';
    } else if (result.textContent === 'you lose...') {
        computerScore++
        result.style.color = 'hsl(0, 84%, 60%)'
    } else {
        result.style.color = 'blue'
    }

    computerScoreOutput.textContent = computerScore;
    playerScoreOutput.textContent = playerScore;
}