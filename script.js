"use strict";
const things = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  const Random = Math.floor(Math.random() * things.length);
  return things[Random];
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
