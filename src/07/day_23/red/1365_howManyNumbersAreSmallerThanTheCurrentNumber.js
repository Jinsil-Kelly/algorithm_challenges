// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

const smallerNumbersThanCurrent = (nums) => {
  const result = [];
  let sum = 0;
  let index = 0;
  let count = 0;

  while (result.length !== nums.length) {
    const target = nums[index];
    const num = nums[count];

    if (target > num) sum += 1;

    count += 1;

    if (count === nums.length) {
      result.push(sum);
      sum = 0;
      count = 0;
      index += 1;
    }
  }
  return result;
};

const testNums = [8, 1, 2, 2, 3];

console.log(smallerNumbersThanCurrent(testNums));
console.log(smallerNumbersThanCurrent(testNums));
