"use strict";
const things = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  const Random = Math.floor(Math.random() * things.length);
  return things[Random];
}
