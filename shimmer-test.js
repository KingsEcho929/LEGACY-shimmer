import { invokeTessalyre } from './audio-suite/tessalyre-signal.js';
import { invokePhotonis } from './render-daemons/photonis-pulse.js';

export function simulateBreach(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#d0d0ff';
  ctx.beginPath();
  ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 100, 0, 2 * Math.PI);
  ctx.fill();

  console.log('[Tessalyre] Shimmer breach activated — terrain pulsed');
  invokeTessalyre(ctx);

  setTimeout(() => {
    invokePhotonis(ctx);
  }, 2000); // Delay Photonis to avoid render collision
}
