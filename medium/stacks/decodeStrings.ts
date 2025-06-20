export function decodeString(s: string): string {
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char: string = s[i];

    if (char !== "]") {
      stack.push(char);
    } else {
      let substring: string = "";

      let j: number = stack.length - 1;
      let backTrackChar: string = stack[j];

      while (backTrackChar !== "[") {
        substring = backTrackChar + substring;
        stack.pop();
        j--;
        backTrackChar = stack[j];
      }

      let repeat: string = "";
      stack.pop();
      j--;
      backTrackChar = stack[j];

      while (/^[0-9]$/.test(backTrackChar)) {
        repeat = backTrackChar + repeat;
        stack.pop();
        j--;
        backTrackChar = stack[j];
      }

      stack.push(substring.repeat(parseInt(repeat)));
    }
  }

  return stack.join("");
}
