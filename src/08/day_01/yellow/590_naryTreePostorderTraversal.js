// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

const postorder = function (root) {
  const arr = [];
  function postOrder(node) {
    if (!node) return arr;

    for (const child of node.children) {
      postOrder(child);
    }

    arr.push(node.val);
    return arr;
  }
  return postOrder(root);
};
