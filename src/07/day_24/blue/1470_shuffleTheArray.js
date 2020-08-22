// https://leetcode.com/problems/shuffle-the-array/

const shuffle = (nums, n) => {
  const resultArr = [];
  for (let i = 0; i < n; i += 1) {
    resultArr.push(nums[i], nums[i + n]);
  }
  return resultArr;
};
