// https://leetcode.com/problems/detect-capital/

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".

const detectCapitalUse = (word) => {
  if (word.toUpperCase() === word) return true;
  const allLowerCase = word.toLowerCase();
  if (allLowerCase === word) return true;
  return allLowerCase[0].toUpperCase() + allLowerCase.slice(1) === word;
};
