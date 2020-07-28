// https://leetcode.com/problems/shuffle-the-array/

const shuffle = function (nums, n) {
  const xArr = nums.slice(0, n);
  const yArr = nums.slice(n, 2 * n);
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (i % 2) {
      result.push(yArr.shift());
    } else {
      result.push(xArr.shift());
    }
  }
  return result;
};
