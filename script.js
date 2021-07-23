"use strict";

const Rock = document.querySelector(".rock");
const Paper = document.querySelector(".paper");
const Scissors = document.querySelector(".scissors");
const playerScores = document.querySelector(".player-score");
const computerScores = document.querySelector(".computer-score");
const result = document.querySelector(".result");
let player = 0;
let computer = 0;

Rock.addEventListener("click", () => {
  playRound((Rock.playerSelection = "rock"));
});
Paper.addEventListener("click", () => {
  playRound((Paper.playerSelection = "paper"));
});

Scissors.addEventListener("click", () => {
  playRound((Scissors.playerSelection = "scissors"));
});

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const Random = Math.floor(Math.random() * choices.length);
  return choices[Random];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "Game Has Tied";
  } else if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection.toLowerCase() == "scissors") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection.toLowerCase() == "rock") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection.toLowerCase() == "paper")
  ) {
    player++;
    result.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computer++;
    result.innerText = `computer wins! ${computerSelection} beats ${playerSelection}`;
  }
}

// function score() {
//   if (player == 5 || computer == 5) {
//     result.innerText = "Refresh browser to play again";
//   }
// }
