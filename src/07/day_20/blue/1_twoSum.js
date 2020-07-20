// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  let result = [];
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 1; j < nums.length; j += 1) {
      if (nums[i] + nums[i + j] === target) {
        result = [i, i + j];
      }
    }
  }
  return result;
};
