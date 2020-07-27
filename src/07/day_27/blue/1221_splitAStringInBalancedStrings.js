// https://leetcode.com/problems/split-a-string-in-balanced-strings/

const balancedStringSplit = (string) => {
  let result = 0;
  let balance = 0;

  for (let i = 0; i < string.length; i += 1) {
    const s = string[i];

    if (balance === 0) result += 1;
    if (s === 'L') balance += 1;
    else balance -= 1;
  }

  return result;
};
