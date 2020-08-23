// https://leetcode.com/problems/generate-parentheses/

const generateParenthesis = (n, result = []) => {
  const bt = (s = '', l = 0, r = 0) => {
    if (s.length === 2 * n) result.push(s);
    if (l < n) bt(`${s}(`, l + 1, r);
    if (r < l) bt(`${s})`, l, r + 1);
  };
  bt();
  return result;
};
