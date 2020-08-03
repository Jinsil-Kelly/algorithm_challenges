// https://leetcode.com/problems/univalued-binary-tree/

const isUnivalTree = function (root) {
  if (!root) return true;
  const uniVal = root.val;
  let result = true;
  function binary(node) {
    if (!node) return;
    if (node.val !== uniVal) result = false;
    binary(node.left);
    binary(node.right);
  }
  binary(root);
  return result;
};

// const treeNode = {
//     val: 2,
//     left: {
//         val: 2,
//         left: {
//             val: 5,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 2,
//             left: null,
//             right: null
//         },
//     },
//     right: {
//         val: 2,
//         left: null,
//         right: null
//     }
// };
// console.log(isUnivalTree(treeNode))
