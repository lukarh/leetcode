export function mergeAlternately(word1: string, word2: string): string {
  let result: string = "";

  const notEqualLength = word1.length !== word2.length;
  const shortestLength =
    word1.length < word2.length ? word1.length : word2.length;

  for (let i = 0; i < shortestLength; i++) {
    result += word1[i];
    result += word2[i];
  }

  if (notEqualLength) {
    if (word1.length < word2.length) {
      result += word2.slice(word1.length);
    } else {
      result += word1.slice(word2.length);
    }
  }

  return result;
}

export function mergeAlternatelyFast(word1: string, word2: string): string {
  let result = "";
  const len = Math.max(word1.length, word2.length);

  for (let i = 0; i < len; i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }

  return result;
}

// what did i learn / refreshed my memory on...

// use Math.max() to get biggest number between the two instead of a conditional
// simplify logic when possible
