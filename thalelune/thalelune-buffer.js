// thalelune-buffer.js
// Introduces silence before Velmari sings

import { playModulatedSiren } from '../audio-suite/siren-modulation.js';

export function activateWithSilence(type) {
  console.log('Thalelune seals corridor. Silence begins.');
  setTimeout(() => {
    playModulatedSiren(type);
  }, 3000); // 3-second silence buffer
}
