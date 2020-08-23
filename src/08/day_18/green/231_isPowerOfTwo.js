// https://leetcode.com/problems/power-of-two/
function isPowerOfTwo(n) {
  let number = 1;
  while (true) {
    if (number < n) {
      number *= 2;
    } else if (number > n) {
      return false;
    } else {
      return true;
    }
  }
}
