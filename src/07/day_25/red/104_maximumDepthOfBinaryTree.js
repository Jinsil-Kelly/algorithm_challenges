// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// BFS
const recursion = (target, depth) => {
  const arr = [];
  const maxDepth = depth + 1;

  for (let i = 0; i < target.length; i += 1) {
    const { left, right } = target[i];
    if (left) arr.push(left);
    if (right) arr.push(right);
  }

  return arr.length ? recursion(arr, maxDepth) : maxDepth;
};

const maxDepth = (root) => {
  return root ? recursion([root], 0) : 0;
};
