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

// Example usage:
const computerChoice = getComputerChoice();
console.log('Computer chose: ' + computerChoice);

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

// Example usage:
const playerSelection = "Rock";
const computerSelection = getComputerChoice(); // Assuming you have the getComputerChoice function from previous responses.
const result = playRound(playerSelection, computerSelection);
console.log(result);
