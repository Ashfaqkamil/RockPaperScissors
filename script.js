const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie! Both chose " + playerSelection + ".";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";
      } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
      }
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(`Round ${round}: ${result}`);
  
      // Update scores
      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }
    }
  
    // Determine the winner of the game
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie! The game ended in a draw.");
    }
  }
  
  game();
  game();
  game();
  game();
  game();
