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
function findRoots(root: TreeNode | null, roots: number[]): number[] {
  if (root.val === null) {
    return roots;
  }

  if (root.left === null && root.right === null) {
    roots.push(root.val);
    return roots;
  }

  if (root.left !== null) {
    findRoots(root.left, roots);
  }

  if (root.right !== null) {
    findRoots(root.right, roots);
  }

  return roots;
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const rootsOf1: number[] = findRoots(root1, []);
  const rootsOf2: number[] = findRoots(root2, []);

  if (rootsOf1.length !== rootsOf2.length) {
    return false;
  }

  return rootsOf1.every((val, index) => {
    return val === rootsOf2[index];
  });
}
