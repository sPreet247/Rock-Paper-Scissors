"use strict";
const things = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  const Random = Math.floor(Math.random() * things.length);
  return things[Random];
}

function game() {}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() !== computerSelection.toLowerCase()) {
    return "You Lose! Paper beats Rock";
  }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
