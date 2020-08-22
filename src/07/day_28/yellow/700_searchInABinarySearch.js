// https://leetcode.com/problems/search-in-a-binary-search-tree/

const searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return root.val > val
    ? searchBST(root.left, val)
    : searchBST(root.right, val);
};
