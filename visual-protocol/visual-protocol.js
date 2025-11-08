// visual-protocol.js
// Binds Photonis and Electronick into shimmer choreography
// Sovereign invocation — no fallback, no echo

import { Photonis } from '../photonis/photonis.js';
import { Electronick } from '../electronick/electronick.js';

export function activateVisualProtocol(screenContext, terrainSignal) {
  if (!screenContext) return;

  // Cast veil first
  Electronick.activate(screenContext, terrainSignal);

  // Then throw photons
  Photonis.activate(screenContext, terrainSignal);
}
