// https://leetcode.com/problems/valid-parentheses/

const isValid = function (s) {
  const input = [...s];
  const stack = [];

  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === '(') stack.push(1);
    else if (input[i] === '{') stack.push(2);
    else if (input[i] === '[') stack.push(3);
    else if (input[i] === ')') {
      if (stack[stack.length - 1] === 1) {
        stack.pop();
      } else {
        return false;
      }
    } else if (input[i] === '}') {
      if (stack[stack.length - 1] === 2) {
        stack.pop();
      } else {
        return false;
      }
    } else if (input[i] === ']') {
      if (stack[stack.length - 1] === 3) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// Cool code I found

// var isValid = function (s) {
//     let stack = [];
//     for (let par of s) {
//         if (par === '(') stack.push(')');
//         else if (par === '[') stack.push(']');
//         else if (par === '{') stack.push('}');
//         else if (stack.pop() !== par) return false;
//     }
//     return stack.length === 0;
// };
