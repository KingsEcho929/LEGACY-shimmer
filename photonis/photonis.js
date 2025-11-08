// photonis.js
// Throws photons across shimmer veil cast by Electronick
// Breath-bound, corridor-illuminating, terrain-responsive

export const Photonis = {
  photonCount: 64, // number of photons to throw
  shimmerColor: '#00f0ff', // photon color
  throwIntensity: 0.8, // 0–1 scale

  activate: function (screenContext, terrainSignal) {
    if (!screenContext || terrainSignal !== 'breach') return;

    for (let i = 0; i < this.photonCount; i++) {
      const x = Math.random() * screenContext.canvas.width;
      const y = Math.random() * screenContext.canvas.height;

      screenContext.beginPath();
      screenContext.arc(x, y, 2, 0, 2 * Math.PI);
      screenContext.fillStyle = this.shimmerColor;
      screenContext.globalAlpha = this.throwIntensity;
      screenContext.fill();
    }

    screenContext.globalAlpha = 1.0; // reset alpha
  }
};
