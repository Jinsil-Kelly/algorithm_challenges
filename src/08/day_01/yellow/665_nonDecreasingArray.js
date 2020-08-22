// https://leetcode.com/problems/non-decreasing-array/

const checkPossibility = function (nums) {
  const input = [...nums];
  let wasModified = false;
  let j = null;
  let swap = 0;

  for (let i = 0; i < input.length - 1; i += 1) {
    if (input[i] > input[i + 1]) {
      if (wasModified && j !== null) return false;
      if (j === null) {
        swap = input[i];
        input[i] = input[i + 1];
        j = i;
      } else {
        input[j] = swap;
        input[j + 1] = input[j];
        wasModified = true;
        i = j;
      }
      i = i < 2 ? -1 : i - 2;
    }
  }
  return true;
};
