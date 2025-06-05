/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  if (nums.length === 1) {
    return;
  }

  let left: number = 0; // used to iterate through array - check for 0
  let right: number = 0; // used to iterate through array - check for nearest non-zero

  while (left < nums.length && right < nums.length) {
    if (nums[left] !== 0) {
      left++;
    } else if (nums[left] === 0) {
      if (nums[right] === 0) {
        right++;
      } else if (right > left && nums[right] !== 0) {
        nums[left] = nums[right];
        nums[right] = 0;
      } else {
        right++;
      }
    }
  }

  return;
}
