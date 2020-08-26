// https://leetcode.com/problems/factorial-trailing-zeroes/

function trailingZeroes(n) {
  let numbers = 0;
  for (let multipliedNums = 5; multipliedNums <= n; multipliedNums *= 5) {
    numbers += Math.floor(n / multipliedNums);
  }
  return numbers;
}
