export function removeStars(s: string): string {
  let result: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char: string = s[i];

    if (char !== "*") {
      result.push(char);
    } else {
      result.pop();
    }
  }

  return result.join("");
}
