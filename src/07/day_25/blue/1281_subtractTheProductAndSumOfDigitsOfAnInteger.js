// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// Solution 1
const subtractProductAndSum1 = (n) => {
  const numArr = n.toString().split('');

  const calculate = (arr, instruction) =>
    arr.reduce((acc, cur) =>
      instruction === 'product'
        ? Number(acc) * Number(cur)
        : Number(acc) + Number(cur),
    );

  const product = calculate(numArr, 'product');
  const sum = calculate(numArr, 'sum');
  return product - sum;
};

// Solution 2
const subtractProductAndSum2 = (n) => {
  const numArr = n.toString().split('');
  let product = 1;
  let sum = 0;

  for (let i = 0; i < numArr.length; i += 1) {
    const currentNumber = Number(numArr[i]);

    product *= currentNumber;
    sum += currentNumber;
  }

  return product - sum;
};
