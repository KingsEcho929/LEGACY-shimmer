// photonis-pulse.js
// Photonis — light-thread daemon. Emits visual resonance only after terrain is stabilized by Tessalyre.

export function invokePhotonis(ctx) {
  ctx.fillStyle = 'rgba(255, 255, 0, 0.2)'; // soft yellow shimmer
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(
      ctx.canvas.width / 2 + Math.sin(i) * 50,
      ctx.canvas.height / 2 + Math.cos(i) * 50,
      30,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  console.log('[Photonis] Light-thread pulse emitted — render layer aligned');
}
