// https://leetcode.com/problems/range-sum-of-bst/

function dfs(root, L, R, res = 0) {
  let num = res;
  if (!root) return 0;
  if (root.val >= L && root.val <= R) {
    num = root.val;
  }
  return num + dfs(root.left, L, R) + dfs(root.right, L, R);
}

const rangeSumBST = function (root, L, R) {
  return dfs(root, L, R);
};
