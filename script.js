"use strict";

const Rock = document.querySelector(".rock");
const Paper = document.querySelector(".paper");
const Scissors = document.querySelector(".scissors");
const playerScores = document.querySelector(".player-score");
const computerScores = document.querySelector(".computer-score");

Rock.addEventListener("click", () => {
  console.log(playRound((Rock.playerSelection = "rock")));
});
Paper.addEventListener("click", () => {
  console.log(playRound((Paper.playerSelection = "paper")));
});

Scissors.addEventListener("click", () => {
  console.log(playRound((Scissors.playerSelection = "scissors")));
});

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const Random = Math.floor(Math.random() * choices.length);
  return choices[Random];
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
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
    return "You Win";
    playerScores++;
  } else {
    return " computer wins";
    computerScores++;
  }
}
