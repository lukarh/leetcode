/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxZigZag(
  root: TreeNode | null,
  right: boolean,
  length: number
): number {
  if (!root || !root.val) return length;

  if (root.left && right) {
    return maxZigZag(root.left, false, length + 1);
  }

  if (root.right && !right) {
    return maxZigZag(root.right, true, length + 1);
  }

  return length;
}

function longestZigZag(root: TreeNode | null): number {
  let maxLength: number = 0;

  if (!root) return maxLength;

  if (root.val && root.left) {
    const maxLeftLength: number = maxZigZag(root.left, false, 1);
    if (maxLeftLength > maxLength) {
      maxLength = maxLeftLength;
    }
  }

  if (root.val && root.right) {
    const maxRightLength: number = maxZigZag(root.right, true, 1);
    if (maxRightLength > maxLength) {
      maxLength = maxRightLength;
    }
  }

  if (root.left) {
    let leftZigZag: number = longestZigZag(root.left);
    if (leftZigZag > maxLength) {
      maxLength = leftZigZag;
    }
  }

  if (root.right) {
    let rightZigZag: number = longestZigZag(root.right);
    if (rightZigZag > maxLength) {
      maxLength = rightZigZag;
    }
  }

  return maxLength;
}

function longestZigZagFast(root: TreeNode | null): number {
  let maxLength = 0;

  function dfs(node: TreeNode | null): [number, number] {
    if (!node) return [-1, -1]; // base case: use -1 to offset +1 below

    const [leftLeft, leftRight] = dfs(node.left);
    const [rightLeft, rightRight] = dfs(node.right);

    const leftPath = leftRight + 1;
    const rightPath = rightLeft + 1;

    maxLength = Math.max(maxLength, leftPath, rightPath);

    return [leftPath, rightPath];
  }

  dfs(root);
  return maxLength;
}
