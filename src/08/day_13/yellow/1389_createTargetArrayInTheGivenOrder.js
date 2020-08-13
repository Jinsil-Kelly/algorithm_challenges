// https://leetcode.com/problems/create-target-array-in-the-given-order/

const createTargetArray = (nums, idx) => {
  const result = [];
  nums.forEach((num, index) => {
    result.splice(idx[index], 0, num);
  });
  return result;
};
