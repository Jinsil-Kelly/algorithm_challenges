// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  if (x < 10) return true;
  const str = x.toString();
  return str === [...str].reverse().join('');
};
