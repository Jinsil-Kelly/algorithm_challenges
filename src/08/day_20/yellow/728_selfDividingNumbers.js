// https://leetcode.com/problems/self-dividing-numbers/

const selfDividingNumbers = function (left, right) {
  const res = [];
  for (let i = left; i <= right; i += 1) {
    if ([...String(i)].every((val) => !(i % val) && val !== 0)) res.push(i);
  }
  return res;
};

// console.log(selfDividingNumbers(left = 1, right = 22));
