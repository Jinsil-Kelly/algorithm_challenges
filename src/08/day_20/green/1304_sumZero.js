// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
function sumZero(n) {
  const arr = [];
  let r = 0;

  for (let integers = 1; integers < n; integers += 0) {
    arr.push(integers);
    r += integers;
  }

  arr.push(-r);

  return arr;
}
