// https://leetcode.com/problems/range-sum-of-bst/

const rangeSumBST = (root, L, R) => {
  let sum = 0;
  // eslint-disable-next-line no-shadow
  const traverse = (root) => {
    if (root.val >= L && root.val <= R) sum += root.val;
    if (root.left !== null) traverse(root.left);
    if (root.right !== null) traverse(root.right);
  };
  traverse(root);
  return sum;
};
