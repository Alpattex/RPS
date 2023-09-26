function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = get ComputerChoice();

    console.log("Round " + round + ":");
    console.log("Player chose: " + playerSelection);
    console.log(Computer chose: " + computerSelection");

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    }
}