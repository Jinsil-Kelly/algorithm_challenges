// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

const subtractProductAndSum = function (n) {
  const input = [...n.toString()];
  const product = input.reduce((a, b) => a * b);
  const sum = input.reduce((a, b) => Number(a) + Number(b));
  return product - sum;
};

// console.log(subtractProductAndSum(n = 234));
