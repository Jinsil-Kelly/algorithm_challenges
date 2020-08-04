// https://leetcode.com/problems/reverse-words-in-a-string-iii/

const reverseWords = (s) => {
  const arr = s.split(' ');
  const result = arr.reduce((acc, cur) => {
    return `${acc + [...cur].reverse().join('')} `;
  }, '');
  return result.trim();
};

// console.log(reverseWords("Let's take LeetCode contest"))
