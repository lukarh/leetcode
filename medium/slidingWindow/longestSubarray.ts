export function longestSubarray(nums: number[]): number {
  let longestLength: number = 0;

  let prevLength: number = 0;
  let currLength: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (currLength > longestLength) {
        longestLength = currLength;
      }

      if (currLength + prevLength > longestLength) {
        longestLength = currLength + prevLength;
      }

      prevLength = currLength; // set prev consecutive length of 1s to curLength
      currLength = 0; // reset current consecutive length 1s to zero
    }

    if (nums[i] === 1) {
      currLength++;

      if (currLength > longestLength) {
        longestLength = currLength;
      }
    }
  }

  if (currLength + prevLength > longestLength) {
    longestLength = currLength + prevLength;
  }

  if (longestLength === nums.length) return nums.length - 1;

  return longestLength;
}
