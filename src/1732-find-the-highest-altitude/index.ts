function largestAltitude(gain: number[]): number {
  let highest = 0;
  let currentAltitude = 0;
  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    highest = Math.max(highest, currentAltitude);
  }

  return highest;
}
