"use strict";

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const Random = Math.floor(Math.random() * choices.length);
  return choices[Random];
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You Lose! Paper beats Rock";
  }
}

function game() {}

const playerSelection = prompt("Please select");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
