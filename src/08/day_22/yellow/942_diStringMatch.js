// https://leetcode.com/problems/di-string-match

const diStringMatch = function (S) {
  let small = 0;
  let big = S.length;
  const res = [];

  [...S].forEach((char) => {
    if (char === 'I') {
      res.push(small);
      small += 1;
    } else {
      res.push(big);
      big -= 1;
    }
  });

  res.push(small);
  return res;
};

// console.log(diStringMatch("IDID"));
