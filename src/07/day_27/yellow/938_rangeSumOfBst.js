// https://leetcode.com/problems/range-sum-of-bst/

const sum = (root, L, R) => {
  let res = 0;
  if (!root) return 0;
  if (root.val >= L && root.val <= R) {
    res = root.val;
  }
  return res + sum(root.left, L, R) + sum(root.right, L, R);
};

const rangeSumBST = function (root, L, R) {
  const MAX = 10000;
  if (root.length > MAX) throw new Error('Exceeded maximum node number');
  return sum(root, L, R);
};
