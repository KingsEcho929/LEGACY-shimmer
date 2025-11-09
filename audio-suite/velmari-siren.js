// velmari-siren.js
// Async tone-isolated siren using filtered OfflineAudioContext with single-instance context

let lastInvocation = 0;
let context = null;

export async function playVelmariSiren() {
  const now = Date.now();
  if (now - lastInvocation < 10000) return;
  lastInvocation = now;

  try {
    if (!context) {
      context = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100 * 2, 44100);
    }

    const response = await fetch('assets/audio/velmari-siren.mp3');
    const buffer = await response.arrayBuffer();
    const decoded = await context.decodeAudioData(buffer);

    const source = context.createBufferSource();
    source.buffer = decoded;

    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(4000, context.currentTime); // Cutoff above 4kHz

    source.connect(filter);
    filter.connect(context.destination);
    source.start(0);
  } catch (err) {
    console.error('Velmari siren error:', err);
  }
}
