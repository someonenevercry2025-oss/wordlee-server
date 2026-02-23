const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  playerId: { type: String, unique: true },
  username: { type: String, default: "Guest" },
  coins: { type: Number, default: 100 },
  hints: { type: Number, default: 3 },
  hearts: { type: Number, default: 5 },
  lastHeartUpdate: { type: Date, default: Date.now },
  streak: { type: Number, default: 0 },
  totalWin: { type: Number, default: 0 },
  totalLose: { type: Number, default: 0 }
});

module.exports = mongoose.model("Player", playerSchema);