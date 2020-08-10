// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence
const canMakeArithmeticProgression = function (arr) {
  if (!arr || arr.length < 2) return true;
  const sorted = arr.sort((a, b) => a - b);
  const diff = Math.abs(arr[1] - arr[0]);
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (Math.abs(arr[i + 1] - arr[i]) !== diff) {
      return false;
    }
  }
  return true;
};

// console.log(canMakeArithmeticProgression(arr = [3, 5, 1]));
