// https://leetcode.com/problems/maximum-69-number/

const maximum69Number = (num) => {
  const str = String(num).replace('6', '9');
  return Number(str);
};
