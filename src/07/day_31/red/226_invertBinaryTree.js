// https://leetcode.com/problems/invert-binary-tree/

const invertTree = (root) => {
  function invert(node) {
    if (!node) return;

    const n = node;

    const temp = node.left;
    n.left = node.right;
    n.right = temp;

    invert(node.left);
    invert(node.right);
  }

  invert(root);
  return root;
};
