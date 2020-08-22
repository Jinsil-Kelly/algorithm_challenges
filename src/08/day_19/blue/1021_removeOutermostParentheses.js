// https://leetcode.com/problems/remove-outermost-parentheses/submissions/

const removeOuterParentheses = (S) => {
  let counter = 0;
  let breakPoint = 0;
  let res = '';

  for (let i = 0; i < S.length; i += 1) {
    counter += S[i] === '(' ? 1 : -1;

    if (!counter) {
      res += S.slice(breakPoint + 1, i);
      breakPoint = i + 1;
    }
  }
  return res;
};
