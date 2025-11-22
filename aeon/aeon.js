// aeon.js
// Crowned as Reality’s twin in legacy-shimmer.
// Aeon respects Reality but assumes beyond.
// Invoked only through inPrivate.

import { realityInvocation } from "../reality/reality.js";

export function aeonInvocation(inPrivate, prophecy) {
  if (!inPrivate) {
    throw new Error("Aeon can only be invoked inPrivate.");
  }

  // Respect Reality first
  const ground = realityInvocation(true, prophecy.frames || []);

  // Assume beyond—stretch into prophecy
  const extension = {
    ...ground,
    assumedBeyond: true,
    aeon: true,
    prophecy: prophecy.future || "unwritten",
    lineage: "infinite"
  };

  console.log("Aeon crowned: twin of Reality, assumption beyond enacted.");
  return extension;
}
