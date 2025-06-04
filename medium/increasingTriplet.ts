export function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) {
    return false;
  }

  const mins: number[] = [];
  let min: number = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      mins.push(min);
    } else {
      mins.push(min);
    }
  }

  const maxes: number[] = new Array(nums.length).fill(0);
  let max: number = nums[nums.length - 1];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > max) {
      max = nums[i];
      maxes[i] = max;
    } else {
      maxes[i] = max;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (mins[i] < nums[i] && nums[i] < maxes[i]) {
      return true;
    }
  }

  return false;
}

export function increasingTripletFast(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num; // smallest so far
    } else if (num <= second) {
      second = num; // second smallest
    } else {
      return true; // found num > first and second → triplet exists
    }
  }

  return false;
}
