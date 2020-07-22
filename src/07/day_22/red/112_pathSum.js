// https://leetcode.com/problems/path-sum/

const hasPathSum = (root, sum) => {
  if (!root) return false;
  const cur = sum - root.val;
  if (!root.left && !root.right && cur === 0) return true;
  return hasPathSum(root.left, cur) || hasPathSum(root.right, cur);
};
