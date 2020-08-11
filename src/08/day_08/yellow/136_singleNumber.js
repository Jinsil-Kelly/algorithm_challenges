// https://leetcode.com/problems/single-number/

const singleNumber = function (nums) {
  const map = new Map();
  let result = 0;
  nums.forEach((num) => {
    map[num] = (map[num] || 0) + 1;
  });
  nums.forEach((num) => {
    if (map[`${num}`] === 1) {
      result = num;
    }
  });
  return result;
};

// console.log(singleNumber([2, 2, 1]));
