const express = require("express");
const Player = require("../models/Player");
const { getRandomWord } = require("../services/wordService");
const { addStreak, resetStreak } = require("../services/hintService");

const router = express.Router();

router.get("/word", (req, res) => {
  const { difficulty } = req.query;
  const word = getRandomWord(difficulty);
  res.json({ word });
});

router.post("/result", async (req, res) => {
  const { playerId, win } = req.body;

  const player = await Player.findOne({ playerId });
  if (!player) return res.status(404).json({ error: "Player tidak ada" });

  if (win) {
    player.coins += 10;
    addStreak(player);
  } else {
    player.hearts -= 1;
    resetStreak(player);
  }

  await player.save();
  res.json(player);
});

module.exports = router;