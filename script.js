function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return 'SCISSORS';
            break;
    }
}

let playerSelection = prompt('Which will it be? Rock, paper, or scissors?');
let playerUpperCase = playerSelection.toUpperCase();

function playRound (playerUpperCase, computerSelection) {   
    if (playerUpperCase === computerSelection) {
        return 'Oops, you two think alike. That\'s a tie.'
    } else if (        
        (playerUpperCase === 'ROCK' && computerSelection === 'PAPER') ||
        (playerUpperCase === 'PAPER' && computerSelection === 'SCISSORS') ||
        (playerUpperCase === 'SCISSORS' && computerSelection === 'ROCK')
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    } else if (
        (playerUpperCase === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerUpperCase === 'PAPER' && computerSelection === 'ROCK') ||
        (playerUpperCase === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else {
        return 'You need to choose between rock, paper, or scissors, you silly goose ;P'
    }
}

const computerSelection = getComputerChoice();
console.log(playRound(playerUpperCase, computerSelection));