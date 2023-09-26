function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Use the rnadom number to determine the computer's choice
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