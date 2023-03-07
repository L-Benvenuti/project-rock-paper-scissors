/* Restart button */
const restartBtn = document.querySelector('#play-again');
restartBtn.addEventListener('click', () => location.reload());

/* Randomizing computer selection of rock, paper, scissors */
let computerSelection;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            computerSelection = 'Rock';
            return computerSelection;
        case 1:
            computerSelection = 'Paper';
            return computerSelection;
        case 2:
            computerSelection = 'Scissors';
            return computerSelection;
    }
}

/* Returning player selection */
let choiceBtn = document.querySelectorAll('#btn');
let playerSelection;

choiceBtn.forEach(button => { button.addEventListener('click', getPlayerSelection)});

function getPlayerSelection(e) {
    playerSelection = (e.target.value);
    playRounds(getComputerChoice(), playerSelection);
}

/* Selecting elements for text display */
const roundResults = document.getElementById('round-result');
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');

/* Initializing points */
let computer = 0;
let player = 0;
let result;


/* Return tie, lose, win depending on player and computer selections */
function playRounds(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log('tie');
        console.log(computerSelection, playerSelection);
        console.log(player, computer);
        result = 'tie';
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
    ) {
        computer++
        result = 'lose';
        console.log('lose');
        console.log(computerSelection, playerSelection);
        console.log(player, computer);
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        player++
        result = 'win';
        console.log('win');
        console.log(computerSelection, playerSelection);
        console.log(player, computer);
    }

    checkScores(result);
}

/* Checking the score so it only allows 5 plays */
function checkScores() {
    if (computer === 5 || player === 5) {
        endGameText(computer, player);
        choiceBtn.forEach(button => { button.removeEventListener('click', getPlayerSelection)});
    } else {
        textContent(result, computer, player);
    }
}

/* Text function based on tie, win, lose, and points */
function textContent(result, computer, player) {
    switch (result) {
        case 'win':
            computerScore.textContent = `Computer: ${computer}`;
            playerScore.textContent = `Player: ${player}`;
            roundResults.textContent = `You Win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
            break
        case 'lose':
            computerScore.textContent = `Computer: ${computer}`;
            playerScore.textContent = `Player: ${player}`;
            roundResults.textContent = `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
            break
        case 'tie':
            computerScore.textContent = `Computer: ${computer}`;
            playerScore.textContent = `Player: ${player}`;
            roundResults.textContent = 'Oops, you two think alike. That\'s a tie.';
            break
    }
}

/* Text when player or computer reach 5 points */
function endGameText(computer, player) {
    if (computer === 5) {
        computerScore.textContent = `Computer: ${computer}`;
        playerScore.textContent = `Player: ${player}`;
        roundResults.textContent = 'Nice try! Guess you can\'t beat the machine.'
    } else if (player === 5) {
        computerScore.textContent = `Computer: ${computer}`;
        playerScore.textContent = `Player: ${player}`;
        roundResults.textContent = 'Wow, I\'m impressed! With that luck you should play the lotto.'
    }
}