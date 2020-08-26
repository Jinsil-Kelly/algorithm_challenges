// https://leetcode.com/problems/perfect-number

const checkPerfectNumber = function (num) {
  if (num <= 1) {
    return false;
  }
  let divisorsSum = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      divisorsSum += i + num / i;
    }
  }
  return divisorsSum === 2 * num;
};
