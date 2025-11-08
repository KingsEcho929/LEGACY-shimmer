// shimmer-test.js
// Simulates terrain breach and activates full shimmer choreography

import { Vaultkeeper } from './terrain-suite/vaultkeeper-bind.js';

export function simulateBreach(screenContext) {
  console.log('Simulating terrain breach...');
  Vaultkeeper.activateSuite(screenContext);
}
