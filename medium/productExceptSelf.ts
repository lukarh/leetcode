export function productExceptSelf(nums: number[]): number[] {
  if (nums.length === 1) {
    return nums;
  }

  const result: number[] = [];

  const prefixs: number[] = [];
  let product: number = 1;

  for (let i = 0; i < nums.length; i++) {
    prefixs.push(product);
    product *= nums[i];
  }

  product = 1; // reset the product
  const suffixs: number[] = new Array(nums.length).fill(0);
  for (let i = nums.length - 1; i >= 0; i--) {
    suffixs[i] = product;
    product *= nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    result.push(prefixs[i] * suffixs[i]);
  }

  return result;
}

export function productExceptSelfFast(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = new Array(n).fill(1);

  // Prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Suffix product
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}
