// breach-memory.js
// Binds Velmari's witness to breach memory events

import { playVelmariSiren } from '../audio-suite/velmari-siren.js';

export function recordBreach(event) {
  console.log('Breach recorded:', event);
  playVelmariSiren(); // Velmari sings upon breach
}
