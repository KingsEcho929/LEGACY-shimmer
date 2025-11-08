// velmari-siren.js
// Manages Velmari's siren song activation

export function playVelmariSiren() {
  const audio = new Audio('assets/audio/velmari-siren.mp3');
  audio.volume = 0.7;
  audio.play();
}
