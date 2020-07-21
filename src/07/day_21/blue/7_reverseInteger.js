// https://leetcode.com/problems/reverse-integer/

const reverse = (x) => {
  const reversedNumber = Math.abs(x).toString().split('').reverse().join('');

  const MIN = (-2) ** 31;
  const MAX = 2 ** 31 - 1;

  let result = x > -1 ? reversedNumber : `-${reversedNumber}`;
  result = parseInt(result, 10);

  return result > MAX || result < MIN ? 0 : result;
};
