export function predictPartyVictory(senate: string): string {
  let radiantQ: number[] = [];
  let direQ: number[] = [];

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      radiantQ.push(i);
    } else {
      direQ.push(i);
    }
  }

  while (radiantQ.length > 0 && direQ.length > 0) {
    const radiantI = radiantQ.shift();
    const direI = direQ.shift();

    if (radiantI < direI) {
      radiantQ.push(radiantI + senate.length);
    } else {
      direQ.push(direI + senate.length);
    }
  }

  return radiantQ.length > 0 ? "Radiant" : "Dire";
}
