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

function getNumPathSum(
  root: TreeNode | null,
  targetSum: number,
  pathSum: number
): number {
  let numPathSums: number = 0;

  if (root.val !== null) {
    pathSum += root.val;
  } else {
    return numPathSums;
  }

  if (pathSum === targetSum) {
    numPathSums++;
  }

  if (root.left !== null) {
    numPathSums += getNumPathSum(root.left, targetSum, pathSum);
  }

  if (root.right !== null) {
    numPathSums += getNumPathSum(root.right, targetSum, pathSum);
  }

  return numPathSums;
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  let numPathSums: number = 0;

  if (root === null) {
    return numPathSums;
  }

  if (root.val !== null) {
    numPathSums += getNumPathSum(root, targetSum, 0);
  }

  if (root.left !== null) {
    numPathSums += pathSum(root.left, targetSum);
  }

  if (root.right !== null) {
    numPathSums += pathSum(root.right, targetSum);
  }

  return numPathSums;
}
