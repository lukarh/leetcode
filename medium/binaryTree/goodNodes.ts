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

function numGoodNodes(root: TreeNode | null, maxVal: number) {
  let goodNodes: number = 0;

  if (root.val >= maxVal) {
    maxVal = root.val;
    goodNodes++;
  }

  if (root.left === null && root.right === null) {
    return goodNodes;
  }

  if (root.left !== null) {
    goodNodes += numGoodNodes(root.left, maxVal);
  }

  if (root.right !== null) {
    goodNodes += numGoodNodes(root.right, maxVal);
  }

  return goodNodes;
}

function goodNodes(root: TreeNode | null): number {
  return numGoodNodes(root, root.val);
}
