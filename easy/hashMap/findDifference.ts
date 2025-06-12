export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const result: Array<number[]> = [[], []];

  const set1 = new Set<number>(nums1);
  const set2 = new Set<number>(nums2);

  result[0] = [...set1].filter((num) => set2.has(num) === false);
  result[1] = [...set2].filter((num) => set1.has(num) === false);

  return result;
}
