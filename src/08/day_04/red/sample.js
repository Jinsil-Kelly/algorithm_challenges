const treeNode = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: [] },
        { val: 6, children: [] },
      ],
    },
    { val: 2, children: [] },
    { val: 4, children: [] },
  ],
};
//
const recursion = (node, arr) => {
  if (!node.children.length) return arr;
  return 1;
};

const preorder = function (root) {
  if (!root) return [];
  return recursion(root, []);
};
console.log(preorder(treeNode)); // [1,3,5,6,2,4]

console.log(preorder(treeNode));
