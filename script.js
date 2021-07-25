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
  playRound("rock");
});
Paper.addEventListener("click", () => {
  playRound("paper");
});

Scissors.addEventListener("click", () => {
  playRound("scissors");
});

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const Random = Math.floor(Math.random() * choices.length);
  return choices[Random];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    result.innerText = "Game Has Tied";
  } else if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection.toLowerCase() == "scissors") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection.toLowerCase() == "rock") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection.toLowerCase() == "paper")
  ) {
    player += 1;
    playerScores.innerText = `${player}`;
    result.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computer += 1;
    computerScores.innerText = `${computer}`;
    result.innerText = `computer wins! ${computerSelection} beats ${playerSelection}`;
  }
}

// function score() {
//   playRound;
//   if (player == 5 || computer == 5) {
//     result.innerText = "Refresh browser to play again";
//   }
// }
