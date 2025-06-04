export function kidsWithCandies(
  candies: number[],
  extraCandies: number
): boolean[] {
  const result: Array<boolean> = [];
  const maxNumCandies: number = Math.max(...candies);

  candies.forEach((numCandies) => {
    if (numCandies + extraCandies >= maxNumCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  });

  return result;
}

export function kidsWithCandiesFast(
  candies: number[],
  extraCandies: number
): boolean[] {
  const maxCandies = Math.max(...candies);
  return candies.map((c) => c + extraCandies >= maxCandies);
}
