const MIN = -2147483648;
const MAX = 2147483647;

const myAtoi = function (str) {
  return Math.max(Math.min(parseInt(str, 10) || 0, MAX), MIN);
};
