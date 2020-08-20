// https://leetcode.com/problems/power-of-three/
function isPowerOfThree(n) {
  for (let number = 1; number <= n; number *= 3) {
    if (number === n) {
      return true;
    }
  }
  return false;
}
