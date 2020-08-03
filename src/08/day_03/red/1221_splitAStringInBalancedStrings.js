// https://leetcode.com/problems/split-a-string-in-balanced-strings/

const balancedStringSplitSolution1 = (s) => {
  const L = 'L';
  let balance = 0;
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (char === L) {
      balance += 1;
    } else {
      balance -= 1;
    }

    if (!balance) count += 1;
  }

  return count;
};

const balancedStringSplitSolution2 = (s) => {
  const L = 'L';
  let arrR = [];
  let arrL = [];
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (char === L) {
      arrL.push(char);
    } else {
      arrR.push(char);
    }

    if (arrR.length === arrL.length) {
      count += 1;
      arrR = [];
      arrL = [];
    }
  }

  return count;
};
