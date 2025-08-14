export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return null;

  if (root.val === val) return root;

  let leftSearch: TreeNode | null = null;
  let rightSearch: TreeNode | null = null;

  if (root.left !== null) {
    leftSearch = searchBST(root.left, val);
  }

  if (root.right !== null) {
    rightSearch = searchBST(root.right, val);
  }

  return leftSearch ? leftSearch : rightSearch;
}
