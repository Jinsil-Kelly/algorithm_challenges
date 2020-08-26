// https://leetcode.com/problems/consecutive-characters/

const maxPower = (s) => {
  let max = 1;
  let count = 1;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === s[i + 1]) max = Math.max(max, (count += 1));
    else count = 1;
  }
  return max;
};
