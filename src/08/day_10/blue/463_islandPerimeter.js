// https://leetcode.com/problems/island-perimeter/

const islandPerimeter = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  let perimeter = 0;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === 1) {
        perimeter += 4;

        // abstract the number of adjacent island
        if (row > 0 && grid[row - 1][col]) perimeter -= 1;
        if (col > 0 && grid[row][col - 1]) perimeter -= 1;
        if (row < rows - 1 && grid[row + 1][col]) perimeter -= 1;
        if (col < cols - 1 && grid[row][col + 1]) perimeter -= 1;
      }
    }
  }
  return perimeter;
};
