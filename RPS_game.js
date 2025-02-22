/*
Author: Angel Blandon
Date: 02/02/2021
Description: This is a simple rock, paper, scissors game that is played in the console.






*/

let humanScore = 0;
let computerScore = 0;

// Get DOM elements
const buttons = document.querySelectorAll("#buttons button");
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerSelection = button.id; // rock, paper, or scissors
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateResults(result);
    updateScore();
    checkWinner();
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function updateResults(result) {
  resultsDiv.textContent = result;
}

function updateScore() {
  scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "Human" : "Computer";
    resultsDiv.textContent = `${winner} wins the game!`;
    buttons.forEach(button => button.disabled = true); // Disable buttons after game ends
  }
}
