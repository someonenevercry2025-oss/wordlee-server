function addStreak(player) {
  player.streak += 1;

  if (player.streak % 5 === 0) {
    player.hints += 10;
  }

  return player;
}

function resetStreak(player) {
  player.streak = 0;
  return player;
}

module.exports = { addStreak, resetStreak };