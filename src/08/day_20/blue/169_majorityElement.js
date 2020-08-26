// https://leetcode.com/problems/majority-element/

const majorityElement = (nums) => {
  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
    if (map[nums[i]] > nums.length / 2) return nums[i];
  }
  return null;
};
