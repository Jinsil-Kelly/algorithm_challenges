// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

const smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map((num) => sorted.indexOf(num));
};
