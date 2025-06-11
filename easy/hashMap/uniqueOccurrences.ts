export function uniqueOccurrences(arr: number[]): boolean {
  const numMap = new Map();
  const occurrencesSeen = new Set();

  for (const num of arr) {
    numMap.set(num, (numMap.get(num) ?? 0) + 1);
  }

  for (const key of numMap.keys()) {
    if (!occurrencesSeen.has(numMap.get(key))) {
      occurrencesSeen.add(numMap.get(key));
    } else {
      return false;
    }
  }

  return true;
}
