export function closeStrings(word1: string, word2: string): boolean {
  // if words not the same length - not close
  if (word1.length !== word2.length) {
    return false;
  }

  // create a hashmap of letters: count of each word
  const word1Map = new Map<string, number>();
  const word2Map = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    const char1: string = word1[i];
    const char2: string = word2[i];

    word1Map.set(char1, (word1Map.get(char1) ?? 0) + 1);
    word2Map.set(char2, (word2Map.get(char2) ?? 0) + 1);
  }

  // check if they use the same letters
  const word1Chars: string = [...word1Map.keys()].sort().join("");
  const word2Chars: string = [...word2Map.keys()].sort().join("");

  if (word1Chars !== word2Chars) {
    return false;
  }

  const word1Freqs: number[] = [...word1Map.values()].sort();
  const word2Freqs: number[] = [...word2Map.values()].sort();

  return word1Freqs.every(
    (freq: number, index: number) => freq === word2Freqs[index]
  );
}
