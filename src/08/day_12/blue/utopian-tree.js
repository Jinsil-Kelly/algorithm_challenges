// https://www.hackerrank.com/challenges/utopian-tree/problem

const utopianTree = (n) => {
  let heightOfTree = 1;
  for (let i = 0; i < n; i += 1) {
    heightOfTree = i % 2 ? (heightOfTree += 1) : (heightOfTree *= 2);
  }
  return heightOfTree;
};
