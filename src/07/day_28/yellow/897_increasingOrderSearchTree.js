// https://leetcode.com/problems/increasing-order-search-tree/

const increasingBST = function (root) {
  let newRoot = null;
  let newTree = null;

  const helper = (node) => {
    if (!node) return;
    helper(node.left);

    if (!newRoot) {
      newRoot = node;
      newTree = node;
    } else {
      newTree.right = node;
      newTree = newTree.right;
    }
    helper(node.right);
  };

  helper(root);
  return newRoot;
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
