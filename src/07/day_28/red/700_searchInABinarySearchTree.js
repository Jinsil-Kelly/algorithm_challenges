// https://leetcode.com/problems/search-in-a-binary-search-tree/

const searchBST = (root, val) => {
  function callDFS(node) {
    if (!node) return null;
    if (node.val === val) return node;
    return val < node.val ? callDFS(node.left) : callDFS(node.right);
  }

  return callDFS(root);
};
// const treeNode = {
//   val: 5,
//   left: {
//     val: 3,
//     left: {
//       val: 2,
//       left: {
//         val: 1,
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//     right: { val: 4, left: null, right: null },
//   },
//   right: {
//     val: 6,
//     left: null,
//     right: {
//       val: 8,
//       left: {
//         val: 7,
//         left: null,
//         right: null,
//       },
//       right: { val: 9, left: null, right: null },
//     },
//   },
// };
// console.log(searchBST(treeNode,7))
