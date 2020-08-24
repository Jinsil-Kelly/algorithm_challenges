// https://leetcode.com/problems/remove-outermost-parentheses/

const removeOuterParentheses = function (S) {
  let res = '';
  let outer = 0;

  for (let i = 0; i < S.length - 1; i += 1) {
    if (S[i] === ')') {
      outer -= 1;
    }
    if (outer > 0) {
      res += S[i];
    }
    if (S[i] === '(') {
      outer += 1;
    }
  }
  return res;
};

// console.log(removeOuterParentheses("(()())(())"));
