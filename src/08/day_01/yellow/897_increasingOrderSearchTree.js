// https://leetcode.com/problems/increasing-order-search-tree/
// const increasingBST = function (root) {
//     let newRoot = null, newTree = null;

//     const helper = (node) => {
//         if (!node) return;
//         // left
//         helper(node.left);

//         // read/visit
//         // while reading/visiting the node update newRoot/newTree
//         if (!newRoot) {
//             newRoot = newTree = node;
//         } else {
//             newTree.right = node;
//             newTree = newTree.right;
//             // set left to null to avoid duplication & to create skewed tree
//             node.left = null;
//         }

//         // right
//         helper(node.right);
//     }

//     helper(root);
//     return newRoot;
// };
