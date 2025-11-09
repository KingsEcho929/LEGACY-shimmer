// shimmer-test.js
// Sovereign shimmer activation with Velmari siren invocation

import { playVelmariSiren } from './audio-suite/velmari-siren.js';

export function simulateBreach(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#d0d0ff';
  ctx.beginPath();
  ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 100, 0, 2 * Math.PI);
  ctx.fill();

  playVelmariSiren();
}
