"use strict";

const Rock = document.querySelector("button.rock");
const Paper = document.querySelector(".paper");
const Scissors = document.querySelector(".scissors");

Rock.addEventListener("click", () => {
  console.log(playRound((Rock.playerSelection = "rock"), computerSelection));
});
Paper.addEventListener("click", () => {
  console.log(playRound((Paper.playerSelection = "paper"), computerSelection));
});

Scissors.addEventListener("click", () => {
  console.log(
    playRound((Scissors.playerSelection = "scissors"), computerSelection)
  );
});

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const Random = Math.floor(Math.random() * choices.length);
  return choices[Random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Game Has Tied";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection.toLowerCase() === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection.toLowerCase() === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection.toLowerCase() === "paper")
  ) {
    return "You Win";
  } else {
    return " computer wins";
  }
}

let playerSelection;
let computerSelection = computerPlay();

// function game() {
//   let playerSelection = document.querySelectorAll("button");
//   let computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));
// }
