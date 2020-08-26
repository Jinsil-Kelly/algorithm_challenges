// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

const countNegatives = function (grid) {
  return grid.reduce(
    (acc, row) => acc + row.filter((num) => num < 0).length,
    0,
  );
};

// console.log(countNegatives(grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));
