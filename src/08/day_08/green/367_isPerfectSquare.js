// https://leetcode.com/problems/valid-perfect-square/
function isPerfectSquare(num) {
  for (let q = 0; q <= num; q += 0) {
    if (q * q === num) {
      return true;
    }
  }
  return false;
}
