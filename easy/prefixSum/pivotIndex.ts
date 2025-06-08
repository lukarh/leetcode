export function pivotIndex(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }

  let leftSum: number = 0;
  let rightSum: number = nums.reduce((acc, num) => acc + num, 0);

  // return pivot index in for loop
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    if (leftSum === rightSum) {
      return i;
    } else {
      leftSum += nums[i];
    }
  }

  return -1; // if we don't find a pivot index
}
