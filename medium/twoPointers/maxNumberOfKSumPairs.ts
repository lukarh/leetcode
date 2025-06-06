function maxOperations(nums: number[], k: number): number {
  const map = new Map<number, number>();
  let count = 0;

  for (const num of nums) {
    const complement = k - num;

    if (map.get(complement) && map.get(complement)! > 0) {
      count++;
      map.set(complement, map.get(complement)! - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }

  return count;
}

// this problem is so dumb - it says use two pointers, but times you out for using two pointers in its test cases....
// when actual solution calls for hash-map, yet this problem is not listed under that...

export function maxOperationsTwoPoints(nums: number[], k: number) {
  if (nums.length === 1) {
    return 0;
  }

  // this just exceeded time...I mean the problem called for two pointers but I guess map is the better option...
  let numOperations: number = 0;

  let left: number = 0; // used to iterate through the array
  let right: number = 1; // used to find other number that sums with left pointer to k

  let seenNumbers = new Set<number>();

  while (left < nums.length) {
    const leftNum: number = nums[left];
    const findNum: number = k - leftNum; // number that is of interest, need to find a pair with left

    while (right < nums.length) {
      const rightNum: number = nums[right];

      if (rightNum === findNum && right !== left) {
        nums.splice(right, 1);
        nums.splice(left, 1);
        numOperations++;
        break;
      } else {
        right++;
      }
    }

    if (right === nums.length) {
      left++;
      seenNumbers.add(leftNum);
    }

    right = left + 1;
  }

  return numOperations;
}
