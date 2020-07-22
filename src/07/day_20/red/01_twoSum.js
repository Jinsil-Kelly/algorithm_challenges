// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  const arr = [...nums];
  let result = null;

  while (arr.length) {
    const num = target - arr.pop();
    const index = arr.indexOf(num);
    if (index > -1) {
      result = [index, arr.length];
      break;
    }
  }
  return result;
};

const twoSumMap = (nums, target) => {
  const map = new Map();
  let result = null;
  for (let i = 0; i < nums.length; i += 1) {
    const num = target - nums[i];
    if (map.has(num)) {
      result = [i, map.get(num)];
      break;
    }
    map.set(nums[i], i);
  }
  return result;
};
