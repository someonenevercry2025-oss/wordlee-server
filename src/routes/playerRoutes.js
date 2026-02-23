const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Player = require("../models/Player");
const { regenHearts } = require("../services/heartService");

const router = express.Router();

router.post("/init", async (req, res) => {
  try {
    const playerId = uuidv4();

    const player = new Player({
      playerId,
      username: `Guest_${playerId.slice(0, 4)}`
    });

    await player.save();

    res.json(player);
  } catch (err) {
    res.status(500).json({ error: "Init gagal" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let player = await Player.findOne({ playerId: req.params.id });

    if (!player) return res.status(404).json({ error: "Player tidak ada" });

    player = regenHearts(player);
    await player.save();

    res.json(player);
  } catch (err) {
    res.status(500).json({ error: "Ambil data gagal" });
  }
});

module.exports = router;