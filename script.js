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

function playRound (playerUpperCase, computerSelection, playerSelection) {   
    if (playerUpperCase === computerSelection) {
        console.log('Oops, you two think alike. That\'s a tie.')
        return 'tie'
    } else if (        
        (playerUpperCase === 'ROCK' && computerSelection === 'PAPER') ||
        (playerUpperCase === 'PAPER' && computerSelection === 'SCISSORS') ||
        (playerUpperCase === 'SCISSORS' && computerSelection === 'ROCK')
    ) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`)
        return 'lose'
    } else if (
        (playerUpperCase === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerUpperCase === 'PAPER' && computerSelection === 'ROCK') ||
        (playerUpperCase === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
        return 'win'
    } else {
        console.log('You need to choose between rock, paper, or scissors, you silly goose ;P')
        return 'nope'
    }
}

console.log(game());


function game() {    
    let computer = 0;
    let player = 0;
    let tie = 'tie';
    let win = 'win';
    let lose = 'lose';
    let nope = 'nope';

    do {
        let playerSelection = prompt('Which will it be? Rock, paper, or scissors?');
        let playerUpperCase = playerSelection.toUpperCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerUpperCase, computerSelection, playerSelection);

        switch (result) {
            case tie:
                console.log('Computer: ' + computer)
                console.log('Player: ' + player)
                continue
            case nope:
                console.log('Computer: ' + computer)
                console.log('Player: ' + player)
                continue
            case win:
                player++
                console.log('Computer: ' + computer)
                console.log('Player: ' + player)
                continue
            case lose:
                computer++
                console.log('Computer: ' + computer)
                console.log('Player: ' + player)
                continue
        }
    } while (computer !== 5 && player !== 5);
        
    if (computer === 5) {
            return 'Nice try! Guess you can\'t beat the machine.'
        } else if (player === 5) {
            return 'Wow, I\'m impressed! With that luck you should play the lotto.'
        }
}