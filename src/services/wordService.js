const easy = require("../data/easy.json");
const medium = require("../data/medium.json");
const hard = require("../data/hard.json");

function getRandomWord(difficulty) {
  let list;

  if (difficulty === "easy") list = easy;
  else if (difficulty === "medium") list = medium;
  else list = hard;

  const word = list[Math.floor(Math.random() * list.length)];
  return word.toUpperCase();
}

module.exports = { getRandomWord };