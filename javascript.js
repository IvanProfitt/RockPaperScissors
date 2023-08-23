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

playRound(getPlayerChoice(1), getComputerChoice());

playRound(getPlayerChoice(2), getComputerChoice());

playRound(getPlayerChoice(3), getComputerChoice());

function playRound(playerSelection, computerSelection) {
  const test = document.querySelector('.print');
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    test.innerHTML = ` You Won! ${playerSelection} beats the bot's choice, ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    test.innerHTML = "It's a tie!";
  } else {
    test.innerHTML = `You lose. You chose ${playerSelection}, but the bot chose ${computerSelection}`;
  }
}

function game() {
  for (let x = 0; x <= 5; x += 1) {
    playRound();
  }
}
