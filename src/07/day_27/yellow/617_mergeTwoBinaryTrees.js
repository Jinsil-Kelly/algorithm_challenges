// https://leetcode.com/problems/merge-two-binary-trees/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const mergeTrees = function (t1, t2) {
  if (!t1 || !t2) return t1 || t2;
  return new TreeNode(
    t1.val + t2.val,
    mergeTrees(t1.left, t2.left),
    mergeTrees(t1.right, t2.right),
  );
};
