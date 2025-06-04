export function reverseVowels(s: string): string {
  const sArray: Array<string> = s.split("");
  let result: Array<string> = s.split("");
  const vowels: Set<string> = new Set([
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U",
  ]);
  let vowelIndices: Array<number> = [];

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (vowels.has(letter)) {
      vowelIndices.push(i);
    }
  }

  vowelIndices.forEach((vowelIndex: number, index: number) => {
    result[vowelIndex] = sArray[vowelIndices[vowelIndices.length - 1 - index]];
  });

  const joinedResult: string = result.join("");

  return joinedResult;
}

export function reverseVowelsFast(s: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const chars = s.split("");
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(chars[left])) left++;
    while (left < right && !vowels.has(chars[right])) right--;

    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }

  return chars.join("");
}
