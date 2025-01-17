// https://leetcode.com/problems/string-to-integer-atoi/

const myAtoi = function (str) {
  const MIN = -2147483648;
  const MAX = 2147483647;
  return Math.max(Math.min(parseInt(str, 10) || 0, MAX), MIN);
};
