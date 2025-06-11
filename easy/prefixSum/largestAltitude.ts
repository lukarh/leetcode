export function largestAltitude(gain: number[]): number {
  let max: number = 0; // var to keep track of max altitute we reach
  let altitude: number = 0; // var to keep track of altitute as we iterate through array

  for (let i = 0; i < gain.length; i++) {
    altitude = altitude + gain[i];

    if (altitude > max) {
      max = altitude;
    }
  }

  return max;
}
