/* Randomizing computer selection of rock, paper, scissors */
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

/* Return tie, lose, win depending on player and computer selections */
function playRound (computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log('tie')
        return 'tie';
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')
    ) {
        console.log('lose')
        return 'lose';
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        console.log('win')
        return 'win';
    }
}

/* Text function based on tie, win, lose, and points */
function textContent(result, playerSelection, computerSelection, computer, player) {
    /* Text display elements */
    const old = document.querySelector('#container');
    const holder = document.createElement('div');
    const content = document.createElement('p');
    const computerPoints = document.createElement ('p');
    const playerPoints = document.createElement ('p');
    
    switch (result) {
        case 'win':
            computerPoints.textContent = 'Computer: ' + computer;
            playerPoints.textContent = 'Player: ' + player;
            content.textContent = `You Win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
            break
        case 'lose':
            computerPoints.textContent = 'Computer: ' + computer;
            playerPoints.textContent = 'Player: ' + player;
            content.textContent = `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
            break
        case 'tie':
            computerPoints.textContent = 'Computer: ' + computer;
            playerPoints.textContent = 'Player: ' + player;
            content.textContent = 'Oops, you two think alike. That\'s a tie.';
            break
    }
    
    holder.append(content, computerPoints, playerPoints);
    old.replaceChild('div', holder);
}

/* Text when player or computer reach 5 points */
function endGameText(computer, player) {
    const old = document.querySelector('#container');
    const holder = document.createElement('div');
    const computerPoints = document.createElement ('p');
    const playerPoints = document.createElement ('p');

    if (computer === 5) {
        computerPoints.textContent = 'Computer: ' + computer;
        playerPoints.textContent = 'Player: ' + player;
        content.textContent = 'Nice try! Guess you can\'t beat the machine.'
    } else if (player === 5) {
        computerPoints.textContent = 'Computer: ' + computer;
        playerPoints.textContent = 'Player: ' + player;
        content.textContent = 'Wow, I\'m impressed! With that luck you should play the lotto.'
    }

    holder.append(computerPoints, playerPoints);
    old.replaceChild('div', holder);
}

/* Full game (5 rounds) */
function game() {

    const computerSelection = getComputerChoice(); 
    let computer = 0;
    let player = 0;

    do {
        let result = playRound(computerSelection, playerSelection);

        switch (result) {
            case 'tie':
                textContent();
                continue
            case 'win':
                player++
                textContent();
                continue
            case 'lose':
                computer++
                textContent();
                continue
        }
    } while (computer !== 5 && player !== 5);

        
    if (computer === 5 || player === 5) {
        endGameText();
    }
}

/* Returning player selection */
let choiceBtn = document.querySelectorAll('#btn');
let playerSelection;

choiceBtn.forEach((choice) => {
    choice.addEventListener('click', () => {
    playerSelection = choice.value;
    game(playerSelection)
    })
})