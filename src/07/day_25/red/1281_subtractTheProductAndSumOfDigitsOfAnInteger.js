// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

const multiply = (acc, cur) => Number(acc) * Number(cur);
const add = (acc, cur) => Number(acc) + Number(cur);
const handleInstruction = (numArr, instruction) =>
  numArr.reduce((acc, cur) => instruction(acc, cur));

const subtractProductAndSum = (n) => {
  const numArr = [...n.toString()];
  return handleInstruction(numArr, multiply) - handleInstruction(numArr, add);
};

// const number = 234;
// console.log(subtractProductAndSum(number));
// console.log(subtractProductAndSum(number))
