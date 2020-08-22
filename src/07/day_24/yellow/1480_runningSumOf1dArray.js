// https://leetcode.com/problems/running-sum-of-1d-array/

const runningSum = (nums) => {
  const resultArr = [];
  const reduce = nums.reduce((acc, cur) => {
    resultArr.push(acc);
    return acc + cur;
  });
  resultArr.push(reduce);
  return resultArr;
};

// const result = runningSum([1, 2, 3, 4]);
// console.log(result);
