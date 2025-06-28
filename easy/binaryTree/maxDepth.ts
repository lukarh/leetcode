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

export function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  let maximumDepth: number = 1;

  if (!root.left && !root.right) {
    return maximumDepth;
  }

  let leftDepth: number = maxDepth(root.left);
  let rightDepth: number = maxDepth(root.right);

  if (leftDepth >= rightDepth) {
    maximumDepth += leftDepth;
  } else {
    maximumDepth += rightDepth;
  }

  return maximumDepth;
}
