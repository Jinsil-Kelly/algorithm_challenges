// https://leetcode.com/problems/minimum-depth-of-binary-tree/

const minDepth = function (root) {
  if (!root) return 0; // add 0
  if (!root.left) return 1 + minDepth(root.right); // [1,2] => 2 when right skew
  if (!root.right) return 1 + minDepth(root.left); // when left skew
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
