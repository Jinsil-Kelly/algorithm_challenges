// https://leetcode.com/problems/height-checker/

const heightChecker = (heights) => {
  let countMoves = 0;
  const sortedArray = [...heights].sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i += 1) {
    if (heights[i] !== sortedArray[i]) {
      countMoves += 1;
    }
  }

  return countMoves;
};
