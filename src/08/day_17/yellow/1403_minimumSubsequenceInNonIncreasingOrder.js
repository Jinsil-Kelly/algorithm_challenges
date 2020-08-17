// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

const minSubsequence = function (nums) {
  const sorted = nums.sort((a, b) => b - a);
  let total = nums.reduce((a, b) => a + b);
  let sum = 0;
  const res = [];

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    total -= nums[i];
    res.push(nums[i]);
    if (sum > total) break;
  }
  return res;
};
