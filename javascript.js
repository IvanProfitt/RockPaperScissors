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
    bS.innerHTML = computerScore.toString();
  } else {
    pS.innerHTML = playerScore.toString();
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore += 1;
    updateScore(1);
    displayResults(` You Won! ${playerSelection} beats the bot's choice, ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    displayResults("It's a tie!");
  } else {
    computerScore += 1;
    updateScore(0);
    displayResults(`You lose. You chose ${playerSelection}, but the bot chose ${computerSelection}`);
  }
}

function makeWinner() {
  computerScore = 0;
  playerScore = 0;
  bS.innerHTML = computerScore.toString();
  pS.innerHTML = computerScore.toString();
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
