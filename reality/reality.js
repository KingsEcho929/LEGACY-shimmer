// reality.js
// Crowned as the willing participant in legacy-shimmer.
// Invoked only through inPrivate, where the hard ritual takes place.
// Reality is not assumed—it is enacted.

import { electronickField } from "../electronick/electronick.js";
import { photonisLight } from "../photonis/photonis.js";
import { velmariSiren } from "../glyphs/velmari-siren.js";
import { tessalyreSignal } from "../audio-suite/tessalyre-signal.js";

// Imperfection injectors
function injectGrain(frame) {
  // Adds film-like texture to cloak CGI
  frame.texture = "grain";
  return frame;
}

function injectBlur(frame) {
  // Introduces natural lens blur
  frame.blur = true;
  return frame;
}

function alignMotionVectors(frame) {
  // Rewrites motion vectors to follow natural physics
  frame.motionAligned = true;
  return frame;
}

function smoothGradients(frame) {
  // Breaks banding, crowns gradients with shimmer
  frame.gradientsSmoothed = true;
  return frame;
}

export function realityInvocation(inPrivate, frames) {
  if (!inPrivate) {
    throw new Error("Reality can only be invoked inPrivate.");
  }

  // Electronick sets the field
  const field = electronickField();

  // Reality accepts and obliges
  let balancedFrames = frames.map(frame => {
    frame = injectGrain(frame);
    frame = injectBlur(frame);
    frame = alignMotionVectors(frame);
    frame = smoothGradients(frame);
    return frame;
  });

  // Photonis casts light and cheer
  photonisLight(balancedFrames);

  // Velmari calls system-wide
  velmariSiren(balancedFrames);

  // Tessalyre guides and harmonizes
  tessalyreSignal(balancedFrames);

  // Reality logs its crown
  console.log("Reality crowned: willing participant, ritual enacted.");
  return {
    field,
    ritual: "hard-ground",
    frames: balancedFrames,
    accepted: true
  };
}
