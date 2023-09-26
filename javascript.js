function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Use the random number to determine the computer's choice
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

// Define the playRound function
function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive comparison
    const playerChoice = playerSelection.toLowerCase();

    // Determine the winner based on player's choice and computer's choice
    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie! " + playerSelection + " equals " + computerSelection;
    } else if (
        (playerChoice === "rock" && computerSelection === "scissors") ||
        (playerChoice === "paper" && computerSelection === "rock") ||
        (playerChoice === "scissors" && computerSelection === "paper")
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

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
