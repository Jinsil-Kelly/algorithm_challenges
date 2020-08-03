// https://leetcode.com/problems/reverse-words-in-a-string-iii/

const reverseWords = (s) => {
  const arr = s.split(' ');
  const result = arr.map((element) => element.split('').reverse().join(''));
  return result.join(' ');
};
