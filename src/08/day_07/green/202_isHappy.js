// https://leetcode.com/problems/happy-number/

function isHappy(n) {
  if (n === 1 || n === 7) {
    return true;
  }

  while (n >= 9) {
    let x = n;
    let s = 0;
    while (x > 0) {
      s += Math ** (x % 10, 2);
      x = Math.floor(x / 10);
    }

    if (s === 1 || s === 7) {
      return true;
    }
    s = n;
  }
  return false;
}
