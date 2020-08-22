// https://leetcode.com/problems/xor-operation-in-an-array/

const xorOperation = (n, start) => {
  const nums = [];
  for (let i = 0; i < n; i += 1) {
    nums.push(start + 2 * i);
  }
  // eslint-disable-next-line no-bitwise
  return nums.reduce((acc, cur) => acc ^ cur);
};
