function maxArea(height: number[]): number {
  // two pointers
  // max x-distance
  // max height is important for our pointers
  // calculate the area (x * y)

  let maxArea: number = 0;

  let left: number = 0;
  let right: number = height.length - 1;

  while (left < right) {
    const x = right - left;
    const y = Math.min(height[left], height[right]);
    const area = x * y;

    if (area > maxArea) {
      maxArea = area;
    }

    if (height[left] > height[right]) {
      right--;
    } else if (height[left] <= height[right]) {
      left++;
    }
  }

  return maxArea;
}
