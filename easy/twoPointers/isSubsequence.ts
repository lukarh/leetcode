export function isSubsequence(s: string, t: string): boolean {
  let sIndex: number = 0;

  for (const char of t) {
    if (char === s[sIndex]) {
      sIndex++;
    }
  }

  return sIndex === s.length;
}

export function isSubsequenceFast(s: string, t: string): boolean {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }

  return i === s.length;
}
