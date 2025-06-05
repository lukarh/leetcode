export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return true;
  }

  let numFlowersPlaced: number = 0;

  flowerbed.forEach((isFlower, index) => {
    if (isFlower === 1) {
      return;
    } else {
      if (index === 0) {
        if (flowerbed[index + 1] === 0) {
          flowerbed[index] = 1;
          numFlowersPlaced += 1;
        }
      } else if (index + 1 === flowerbed.length) {
        if (flowerbed[index - 1] === 0) {
          flowerbed[index] = 1;
          numFlowersPlaced += 1;
        }
      } else {
        if (flowerbed[index - 1] === 0 && flowerbed[index + 1] === 0) {
          flowerbed[index] = 1;
          numFlowersPlaced += 1;
        }
      }
    }
    return;
  });

  return numFlowersPlaced >= n;
}

export function canPlaceFlowersFast(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1; // place flower
      count++;
      if (count >= n) return true;
    }
  }

  return count >= n;
}
