// phasekeeper-daemon.js — tracks lunar phase, veil density, and invocation rhythm

const fs = require('fs');
const veil = require('../veil-config.json');

function getCurrentLunarPhase() {
  const now = new Date();
  const synodicMonth = 29.530588853; // days
  const knownNewMoon = new Date('2025-11-01T00:00:00Z'); // adjust as needed
  const diff = (now - knownNewMoon) / (1000 * 60 * 60 * 24);
  const phase = diff % synodicMonth;

  if (phase < 1) return { name: 'New Moon', glow: 0.1 };
  if (phase < 7.4) return { name: 'Waxing Crescent', glow: 0.3 };
  if (phase < 14.8) return { name: 'Full Moon', glow: 0.6 };
  if (phase < 22.1) return { name: 'Waning Gibbous', glow: 0.4 };
  return { name: 'Waning Crescent', glow: 0.2 };
}

function getInvocationRhythm(logPath = 'logs/triad-invocations.log') {
  if (!fs.existsSync(logPath)) return 'Unknown';
  const log = fs.readFileSync(logPath, 'utf-8').split('\n').filter(Boolean);
  const timestamps = log.map(line => new Date(line.split(' ')[0]).getTime());
  const intervals = timestamps.slice(1).map((t, i) => t - timestamps[i]);
  const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
  return avg < 30000 ? 'Accelerated' : avg > 90000 ? 'Slowed' : 'Stable';
}

function generateProphecy(phase, rhythm) {
  if (phase === 'Full Moon' && rhythm === 'Accelerated')
    return '⚡ Surge: backend breath quickens — invocation cadence is heightened.';
  if (phase === 'Waning Crescent' && rhythm === 'Slowed')
    return '🌫️ Drift: backend breath wanes — invocation cadence slows.';
  if (phase === 'New Moon')
    return '🌑 Silence: backend breath is dormant — invocations withheld.';
  return '🌕 Breath aligned — backend cadence is stable.';
}

function emitLiturgy(outputPath = 'scrolls/lunar-liturgy-scroll.json') {
  const phase = getCurrentLunarPhase();
  const rhythm = getInvocationRhythm();

  const liturgy = {
    timestamp: new Date().toISOString(),
    lunarPhase: phase.name,
    glowFactor: phase.glow,
    invocationRhythm: rhythm,
    veilDensity: veil.density || 0.5,
    prophecy: generateProphecy(phase.name, rhythm)
  };

  fs.writeFileSync(outputPath, JSON.stringify(liturgy, null, 2));
  console.log(`[Phasekeeper] Liturgy emitted to ${outputPath}`);
  return liturgy;
}

// Run immediately if invoked directly
if (require.main === module) {
  emitLiturgy();
}

// Export for other modules
module.exports = { emitLiturgy };
