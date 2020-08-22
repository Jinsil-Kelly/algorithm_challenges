// https://leetcode.com/problems/convert-a-number-to-hexadecimal/

const toHex = function (num) {
  const number = parseInt(num, 10);
  return (number >= 0 ? number : 4294967296 + number).toString(16);
};
