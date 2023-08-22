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

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return ` You Won! ${playerSelection} beats the bot's choice, ${computerSelection}`;
  }

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  return `You lose. You chose ${playerSelection}, but the bot chose ${computerSelection}`;
}

function testing() {
  const test = document.querySelector('.test');
  test.value = 'It Worked!';
  console.log('1');
}
