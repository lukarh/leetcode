export function twoSum(nums: number[], target: number): number[] {
  const solution: Array<number> = [];
  // where each key-value pair is the number: index pair
  const seenNumbers: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const num: number = nums[i]; // get the current number we are on
    const otherNum: number = target - num; // value of other number needed such it adds to target

    const existsInNums: boolean = seenNumbers[otherNum] !== undefined;
    if (existsInNums) {
      const otherIndex: number = seenNumbers[otherNum];
      solution.push(otherIndex, i);
      break;
    }

    seenNumbers[num] = i;
  }

  return solution;
}

export function twoSumFast(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }
    seen.set(nums[i], i);
  }

  return []; // If no solution, though problem usually guarantees one
}

// what did i learn / refreshed my memory on...

// use hash map for fast & efficient search / keep track of what was seen and at what index
// use .has() or .get()
// .has(key: K): boolean - Checks if the map contains the key.
// .get(key: K): V | undefined - Returns the value for the given key, or undefined if the key doesn’t exist.
// .set(key: K, value: V): this - Adds or updates the key with the specified value.
