// https://leetcode.com/problems/maximum-69-number/

const maximum69Number = function (num) {
  return parseInt(String(num).replace('6', '9'), 10);
};
