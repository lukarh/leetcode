export function maxLevelSum(root: TreeNode | null): number {
  let valsAtDepth: number[] = [];

  function addToSumAtDepth(root: TreeNode | null, depth: number) {
    if (root === null) return;

    if (depth > valsAtDepth.length) {
      valsAtDepth.push(root.val);
    } else {
      valsAtDepth[depth - 1] = valsAtDepth[depth - 1] + root.val;
    }

    addToSumAtDepth(root.left, depth + 1);
    addToSumAtDepth(root.right, depth + 1);
  }

  addToSumAtDepth(root, 1);

  let depthWithMax: number = 1;
  let maxSum: number = valsAtDepth[0];

  valsAtDepth.map((val, index) => {
    if (val > maxSum) {
      maxSum = val;
      depthWithMax = index + 1;
    }
  });

  return depthWithMax;
}
