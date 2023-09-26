function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice();

        console.log("Round " + round + ":");
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    console.log("Game Over!");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game. Better luck next time!");
    } else {
        console.log("It's a tie! The game ends in a draw.");
    }
}

game();
