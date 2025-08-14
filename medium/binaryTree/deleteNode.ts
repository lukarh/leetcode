export function deleteNode(
  root: TreeNode | null,
  key: number
): TreeNode | null {
  if (root === null) return null;

  if (root.val === key) {
    if (root.left === null && root.right === null) return null;

    if (root.right === null && root.right !== null) return root.right;

    if (root.left !== null && root.right === null) return root.left;

    let successor = root.right;
    while (successor.left) successor = successor.left;
    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
}
