export function asteroidCollision(asteroids: number[]): number[] {
  let result: number[] = [];

  const willCollide = (leftAsteroid: number, rightAsteroid: number) => {
    // checks if left asteroid is moving right, while right asteroid is moving left
    return leftAsteroid > 0 && rightAsteroid < 0;
  };

  let i: number = 0;

  while (i < asteroids.length) {
    const asteroid: number = asteroids[i];

    if (result.length === 0) {
      result.push(asteroid);
      i++;
      continue;
    }

    const prevAsteroid: number = result[result.length - 1];
    const collision: boolean = willCollide(prevAsteroid, asteroid);

    // case #1 if new asteroid bigger then prev asteroid during collision, remove prev asteroid from stack and add new asteroid
    if (collision && Math.abs(asteroid) > Math.abs(prevAsteroid)) {
      result.pop();
      continue;
      // case #2 if asteroids same size during collision, remove prev asteroid from stack
    } else if (collision && Math.abs(asteroid) === Math.abs(prevAsteroid)) {
      result.pop();
      i++;
      // case #3 if no collision, add asteroid to stack
    } else if (collision && Math.abs(asteroid) < Math.abs(prevAsteroid)) {
      i++;
    } else {
      result.push(asteroid);
      i++;
    }
  }

  return result;
}
