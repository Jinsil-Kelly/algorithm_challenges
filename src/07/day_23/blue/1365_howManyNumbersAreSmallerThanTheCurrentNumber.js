// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

const smallerNumbersThanCurrent = (nums) => {
  let count = 0;
  const resultArr = [];
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      count = nums[i] > nums[j] ? (count += 1) : count;
    }
    resultArr.push(count);
    count = 0;
  }
  return resultArr;
};
