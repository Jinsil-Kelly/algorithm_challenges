// https://leetcode.com/problems/valid-palindrome/

const isPalindrome = (s) => {
  const str = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const leng = str.length;

  for (let i = 0, j = leng - 1; i < leng; i += 1, j -= 1) {
    if (str[i] !== str[j]) return false;
  }
  return true;
};
