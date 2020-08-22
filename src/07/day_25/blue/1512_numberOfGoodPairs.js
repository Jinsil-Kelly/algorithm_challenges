// https://leetcode.com/problems/number-of-good-pairs/

const numIdenticalPairs = (nums) => {
  nums.sort();
  let total = 0;
  let currentCount = 1;
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] === nums[i - 1]) {
      total += currentCount;
      currentCount += 1;
    } else {
      currentCount = 1;
    }
  }
  return total;
};
