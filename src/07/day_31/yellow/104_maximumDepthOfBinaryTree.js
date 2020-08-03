// https://leetcode.com/problems/maximum-depth-of-binary-tree/

const maxDepth = function (root) {
  if (!root) return null;
  const max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
};

// const treeNode = {
//     val: 3,
//     left: {
//         val: 9,
//         left: null,
//         right: null
//     },
//     right: {
//         val: 20,
//         left: {
//             val: 15,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null
//         },
//     },
// };
// const result = maxDepth(treeNode);
// console.log(result);
