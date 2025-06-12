export function findMaxAverage(nums: number[], k: number): number {
  if (nums.length === 1) return nums[0];

  if (nums.length === k) return nums.reduce((acc, val) => acc + val, 0) / k;

  let maxAverage: number = 0;

  let currentSum: number = nums.slice(0, k).reduce((acc, val) => acc + val, 0);

  for (let i = 0; i < nums.length - k + 1; i++) {
    const average = currentSum / k;

    if (average > maxAverage || i === 0) {
      maxAverage = average;
    }

    currentSum -= nums[i];
    currentSum += nums[i + k];
  }

  return maxAverage;
}
