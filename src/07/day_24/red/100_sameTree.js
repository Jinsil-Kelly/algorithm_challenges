// https://leetcode.com/problems/same-tree/

const isSameTree = (p, q) => {
  if (!p || !q) {
    return p === q;
  }
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
