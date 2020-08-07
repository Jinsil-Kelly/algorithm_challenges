// https://leetcode.com/problems/univalued-binary-tree/

const isUnivalTree = (root) => {
  const value = root.val;
  const recursion = (node) => {
    if (!node) return true;
    if (node.val !== value) return false;
    return recursion(node.left) && recursion(node.right);
  };
  return recursion(root);
};
