// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
const returnPreOrder = function (node, arr) {
  if (!node) return;
  arr.push(node.val);
  const children = node.children || [];
  for (let i = 0; i < children.length; i += 1) {
    returnPreOrder(children[i], arr);
  }
};

const preorder = function (root) {
  const arr = [];
  returnPreOrder(root, arr);
  return arr;
};
