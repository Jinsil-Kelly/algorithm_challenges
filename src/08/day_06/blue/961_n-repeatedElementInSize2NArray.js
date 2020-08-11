// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

const repeatedNTimes = (A) => {
  const N = A.length / 2;
  let count = 0;
  const arr = [...A].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i += 1) {
    if (count === N - 1) return arr[i];

    count = arr[i] === arr[i + 1] ? (count += 1) : 0;
  }
  return null;
};
