const MAX_HEART = 5;
const REGEN_INTERVAL = 60000; // 1 menit

function regenHearts(player) {
  const now = Date.now();
  const diff = now - player.lastHeartUpdate;
  const regenCount = Math.floor(diff / REGEN_INTERVAL);

  if (regenCount > 0) {
    player.hearts = Math.min(MAX_HEART, player.hearts + regenCount);
    player.lastHeartUpdate = new Date(now);
  }

  return player;
}

module.exports = { regenHearts };