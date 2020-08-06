// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

const repeatedNTimes = (A) => {
  const N = A.length / 2;
  let count = 0;
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i += 1) {
    if (count === N - 1) return A[i];
    count = A[i] === A[i + 1] ? (count += 1) : 0;
  }
  return null;
};
