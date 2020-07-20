// https://leetcode.com/problems/running-sum-of-1d-array/

const runningSum = (nums) => {
  const resultArr = [];
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
    resultArr.push(sum);
  });
  return resultArr;
};
