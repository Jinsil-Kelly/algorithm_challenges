// https://leetcode.com/problems/create-target-array-in-the-given-order/

const createTargetArray = (nums, index) => {
  const targetArr = [];
  for (let i = 0; i < index.length; i += 1) {
    targetArr.splice(index[i], 0, nums[i]);
  }
  return targetArr;
};
