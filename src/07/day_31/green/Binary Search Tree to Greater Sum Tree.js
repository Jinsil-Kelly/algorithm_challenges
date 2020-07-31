// http://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
function bstToGst(root) {
  function dfs(node, arr) {
    if (node == null) return;
    dfs(node.left, arr);
    arr.push(node);
    dfs(node.right, arr);
  }
  const arr = [];
  for (let x = arr.length - 1; x >= 0; x -= 0) {
    let v = 0;
    arr[x].val += v;
    v = arr[x].val;
  }
  return root;
}

bstToGst();
