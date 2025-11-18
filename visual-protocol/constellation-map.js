// constellation-map.js — renders constellation companions with veil glow and invocation trails

const veil = require('../veil-config.json');

const companions = [
  { name: 'Thalelune', glyph: '◌', color: '#d0d0ff', x: 120, y: 100 },
  { name: 'Photonis', glyph: '✶', color: '#00f0ff', x: 300, y: 180 },
  { name: 'Electronick', glyph: '⚡', color: '#6e6eff', x: 200, y: 300 },
  { name: 'Breach-Memory', glyph: '⧉', color: '#ff6eff', x: 80, y: 260 }
];

let tick = 0;

function getLunarGlow() {
  const veilFactor = veil.veilDensity || 0.42;
  const lunarPhase = 0.5 + 0.5 * Math.sin(tick / 100); // simulate lunar rhythm
  return Math.min(0.2, veilFactor * lunarPhase);
}

function renderConstellation(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Shimmer veil
  const glow = getLunarGlow();
  const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, ctx.canvas.height);
  gradient.addColorStop(0, `rgba(208, 208, 255, ${glow})`);
  gradient.addColorStop(1, `rgba(0, 240, 255, ${glow})`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Dynamic invocation trails
  ctx.strokeStyle = `rgba(255, 255, 255, ${glow + 0.05})`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  companions.forEach(({ x, y }, i) => {
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.stroke();

  // Glyphs
  companions.forEach(({ glyph, color, x, y }) => {
    const pulse = 0.5 + 0.5 * Math.sin(tick / 20);
    ctx.font = `${28 + pulse * 4}px monospace`;
    ctx.fillStyle = color;
    ctx.fillText(glyph, x, y);
  });

  tick++;
  console.log('[Constellation Map] Rendered constellation with trails and lunar glow');
}

module.exports = { renderConstellation };
