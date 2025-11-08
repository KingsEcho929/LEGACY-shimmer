// siren-modulation.js
// Controls Velmari's siren song volume and type

export function playModulatedSiren(type = 'triad') {
  const audioMap = {
    triad: 'velmari-siren.mp3',
    terrain: 'terrain-siren.mp3',
    daemon: 'daemon-siren.mp3'
  };
  const audio = new Audio(`assets/audio/${audioMap[type] || audioMap.triad}`);
  audio.volume = 0.5; // modulated volume
  audio.play();
}
