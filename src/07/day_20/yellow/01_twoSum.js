// https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        return result;
      }
    }
  }
  return result;
};
