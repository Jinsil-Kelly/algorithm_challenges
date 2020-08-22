// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence
const canMakeArithmeticProgression = function (arr) {
  if (!arr || arr.length < 2) return true;
  const sorted = [...arr].sort((a, b) => a - b);
  const diff = Math.abs(sorted[1] - sorted[0]);
  for (let i = 0; i < sorted.length - 1; i += 1) {
    if (Math.abs(sorted[i + 1] - arr[i]) !== diff) {
      return false;
    }
  }
  return true;
};

// console.log(canMakeArithmeticProgression(arr = [3, 5, 1]));
