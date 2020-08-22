// https://leetcode.com/problems/n-repeated-element-in-size-2n-array

const repeatedNTimes = function (A) {
  for (let i = 0; i < A.length; i += 1) {
    if (A.filter((a) => a === A[i]).length > 1) {
      return A[i];
    }
  }
  return null;
};
