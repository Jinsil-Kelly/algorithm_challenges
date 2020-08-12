// https://leetcode.com/problems/reverse-integer/

function reverse(x) {
  let numx = Math.abs(x);
  let newx = '';
  while (numx > 0) {
    const added = numx % 10;
    numx = Math.floor(numx / 10);
    newx += added.toString();
  }
  if (newx < -Math * (2, 31) || newx > Math * (2, 31)) {
    return 0;
  }

  if (x < 0) {
    return -newx;
  }
  return newx;
}
