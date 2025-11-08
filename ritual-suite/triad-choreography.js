// triad-choreography.js
// Full activation of the Triad of Clarity

import { activateVisualProtocol } from '../visual-protocol/activate.js';
import { bindOverlay } from '../terrain-suite/terrain-overlay-bind.js';
import { recordBreach } from '../daemon-suite/breach-memory.js';

export function activateTriad(ctx, terrainSignal) {
  activateVisualProtocol();
  bindOverlay(ctx, terrainSignal);
  recordBreach({ type: 'shimmer', source: 'triad' });
}
