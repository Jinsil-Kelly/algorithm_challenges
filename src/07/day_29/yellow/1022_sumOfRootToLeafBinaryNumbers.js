// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

const sumRootToLeaf = function (root) {
  if (!root) return 0;
  let temp = '';
  let res = 0;

  function rootToLeaf(node) {
    if (!node) return;
    temp += node.val;
    rootToLeaf(node.left);
    rootToLeaf(node.right);

    if (!node.left && !node.right) {
      res += parseInt(temp, 2);
    }
    temp = temp.substring(0, temp.length - 1);
  }

  rootToLeaf(root);
  return res;
};

// const treeNode = {
//     val: 1,
//     left: {
//         val: 0,
//         left: {
//             val: 0,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 1,
//             left: null,
//             right: null
//         },
//     },
//     right: {
//         val: 1,
//         left: {
//             val: 0,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 1,
//             left: null,
//             right: null
//         }
//     }
// };
// console.log(sumRootToLeaf(treeNode));
