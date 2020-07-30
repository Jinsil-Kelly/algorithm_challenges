// https://leetcode.com/problems/increasing-order-search-tree/

const increasingBST = function (root) {
  let newRoot = null;
  let output = null;
  if (!root) return null;

  function inorder(node) {
    if (!node) return;
    inorder(node.left);

    if (!output) {
      output = node;
      newRoot = node;
    } else {
      newRoot.right = node;
      newRoot = newRoot.right;
    }
    inorder(node.right);
  }

  inorder(root);
  return output;
};

// const treeNode = {
//     val: 5,
//     left: {
//         val: 3,
//         left: {
//             val: 2,
//             left: {
//                 val: 1,
//                 left: null, right: null
//             },
//             right: null
//         },
//         right: { val: 4, left: null, right: null }
//     },
//     right: {
//         val: 6,
//         left: null,
//         right: {
//             val: 8,
//             left: {
//                 val: 7,
//                 left: null, right: null
//             },
//             right: { val: 9, left: null, right: null }
//         },
//     },
// };
// const result = increasingBST(treeNode);
// console.log(result);
