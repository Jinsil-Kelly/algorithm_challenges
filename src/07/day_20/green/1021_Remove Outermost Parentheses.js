// https://leetcode.com/problems/remove-outermost-parentheses/

/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function (S) {
  let count = 0;
  let output = '';

  for (let i = 0; i < S.length; i += 1) {
    if (S[i] === '(' && count === 0) {
      count += 1;
    }
    if (S[i] === ')' && count === 1) {
      count -= 1;
    }
    if (S[i] === '(' && count !== 0) {
      output += S[i];
      count += 1;
    }
    if (S[i] === ')' && count !== 0) {
      output += S[i];
      count -= 1;
    }
  }
  return output;
};
