// https://leetcode.com/problems/power-of-four/
function isPowerOfFour(n) {
  for (let number = 1; number <= n; number *= 4) {
    if (number === n) {
      return true;
    }
  }
  return false;
}
