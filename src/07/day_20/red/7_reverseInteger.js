// https://leetcode.com/problems/plus-one/

const checkRange = (num) => {
  const MIN = (-2) ** 31;
  const MAX = 2 ** 31 - 1; // 2147483647
  return num > MAX || num < MIN;
};

const reverse = (x) => {
  if (checkRange(x)) return 0;
  let isNegative = false;
  if (x < 0) isNegative = true;
  const reversedNum = [...Math.abs(x).toString()].reverse().join('') * 1;
  if (checkRange(reversedNum)) return 0;
  return isNegative ? -reversedNum : reversedNum;
};
