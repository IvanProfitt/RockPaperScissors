let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return 'rock';
  }
  if (randomNumber >= 0.33 && randomNumber <= 0.66) {
    return 'paper';
  }

  return 'scissors';
}

function getPlayerChoice(value) {
  if (value === 1) {
    return 'rock';
  }
  if (value === 2) {
    return 'paper';
  }
  return 'scissors';
}

const test = document.querySelector('.results');
const pS = document.querySelector('.you-Score');
const bS = document.querySelector('.bot-Score');

function displayResults(information) {
  test.innerHTML = information;
}

function updateScore(num) {
  if (num === 0) {
    playerScore += 1;
    bS.innerHTML = computerScore.toString();
  } else {
    computerScore += 1;
    pS.innerHTML = playerScore.toString();
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    updateScore(1);
    displayResults(` You Won! ${playerSelection} beats the bot's choice, ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    displayResults("It's a tie!");
  } else {
    updateScore(0);
    displayResults(`You lose. You chose ${playerSelection}, but the bot chose ${computerSelection}`);
  }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const info = button.id;
    playRound(info, getComputerChoice());

    if (playerScore === 5 || computerScore === 5) {
      makeWinner();
    }
  });
});

// playing.onclick(playRound((getPlayerChoice(playing)), getComputerChoice()));
// playing.onclick(console.log('it works'));

/* function game() {
  for (let x = 0; x <= 5; x += 1) {
    playRound();
  }
} */
