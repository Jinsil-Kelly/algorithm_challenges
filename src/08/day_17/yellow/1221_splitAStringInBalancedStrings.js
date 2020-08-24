// https://leetcode.com/problems/split-a-string-in-balanced-strings

const balancedStringSplit = function (s) {
  let rCount = 0;
  let lCount = 0;
  let res = 0;

  [...s].forEach((char) => {
    if (char === 'R') {
      rCount += 1;
    } else if (char === 'L') {
      lCount += 1;
    }
    if (rCount === lCount) {
      res += 1;
    }
  });

  return res;
};
