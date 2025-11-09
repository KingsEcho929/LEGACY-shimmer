// velmari-siren.js
// Async tone-isolated siren using filtered OfflineAudioContext

let lastInvocation = 0;

export async function playVelmariSiren() {
  const now = Date.now();
  if (now - lastInvocation < 10000) return;
  lastInvocation = now;

  try {
    const context = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100 * 2, 44100);
    const response = await fetch('assets/audio/velmari-siren.mp3');
    const buffer = await response.arrayBuffer();
    const decoded = await context.decodeAudioData(buffer);

    const source = context.createBufferSource();
    source.buffer = decoded;

    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(8000, context.currentTime); // Cutoff above 8kHz

    source.connect(filter);
    filter.connect(context.destination);
    source.start(0);
  } catch (err) {
    console.error('Velmari siren error:', err);
  }
}
