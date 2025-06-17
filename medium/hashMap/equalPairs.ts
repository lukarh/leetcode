export function equalPairs(grid: number[][]): number {
  let numPairs: number = 0;

  const invertedGrid: number[][] = [];

  for (let i = 0; i < grid.length; i++) {
    let curCol: number[] = [];

    for (let j = 0; j < grid.length; j++) {
      curCol.push(grid[j][i]);
    }

    invertedGrid.push(curCol);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < invertedGrid.length; j++) {
      if (JSON.stringify(grid[i]) === JSON.stringify(invertedGrid[j])) {
        numPairs++;
      }
    }
  }

  return numPairs;
}

export function equalPairsFast(grid: number[][]): number {
  const n = grid.length;
  const rowMap = new Map();
  let count = 0;

  // Store each row's serialized form in a map
  for (let row of grid) {
    const key = row.join(",");
    rowMap.set(key, (rowMap.get(key) || 0) + 1);
  }

  // For each column, form its serialized version and look it up
  for (let c = 0; c < n; c++) {
    const col = [];
    for (let r = 0; r < n; r++) {
      col.push(grid[r][c]);
    }
    const key = col.join(",");
    if (rowMap.has(key)) {
      count += rowMap.get(key);
    }
  }

  return count;
}
