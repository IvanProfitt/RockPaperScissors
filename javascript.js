let playerScore = 0;
let computerScore = 0;
const test = document.querySelector('.results');
const pS = document.querySelector('.you-Score');
const bS = document.querySelector('.bot-Score');
const buttons = document.querySelectorAll('button');

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

function displayResults(information) {
  test.innerHTML = information;
}

function makeWinner() {
  console.log('2');
  const endResults = document.querySelector('.endResults');
  if (playerScore === 5) {
    endResults.innerHTML = "You've defeated the super advanced AI! Humanity is saved!.";
  } else {
    endResults.innerHTML = 'Our proprietary AI has become too strong. It has beaten you.';
  }

  computerScore = 0;
  playerScore = 0;
  bS.innerHTML = computerScore.toString();
  pS.innerHTML = computerScore.toString();
}

function updateScore(num) {
  if (computerScore === 5 || playerScore === 5) {
    makeWinner();
    console.log(1);
  }
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

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const info = button.id;
    playRound(info, getComputerChoice());

    if (playerScore === 5 || computerScore === 5) {
      makeWinner();
    }
  });
});
