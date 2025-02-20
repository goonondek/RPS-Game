/*
Author: Angel Blandon
Date: 02/02/2021
Description: This is a simple rock, paper, scissors game that is played in the console.






*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice(); // Recursively ask for input until valid
    }
}

function playRound(humanChoice, computerChoice) {
    console.log("You threw: " + humanChoice);
    console.log("The computer threw: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win!");
        return "human";
    } else {
        computerScore++;
        console.log("Computer wins!");
        return "computer";
    }
}

function displayScore() {
    console.log("Human: " + humanScore + " | Computer: " + computerScore);
}

function playGame() {
    for (let i = 0; i < 5; i++) { // Play 5 rounds
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        displayScore();
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();