// https://leetcode.com/problems/split-a-string-in-balanced-strings/

const balancedStringSplit = (s) => {
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
