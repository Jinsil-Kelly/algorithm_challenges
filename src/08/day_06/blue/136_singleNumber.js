// https://leetcode.com/problems/single-number/

const singleNumber = (nums) => {
  nums.sort((a, b) => a - b);

  while (nums.length >= 1) {
    if (nums.length === 1) return nums[0];

    if (nums[0] !== nums[1]) {
      return nums[0];
    }
    nums.splice(0, 2);
  }
  return null;
};
