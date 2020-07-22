// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

const findNumbers = (nums) => {
  const stringArr = nums.map((num) => num.toString());
  return stringArr.filter((element) => element.length % 2 === 0).length;
};
