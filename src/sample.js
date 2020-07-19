// https://leetcode.com/problems/plus-one/

const recursion = (target, arr) => {
  const sum = target.pop() + 1;
  if (sum === 10) {
    arr.unshift(0);
    return !target.length ? [1, ...arr] : recursion(target, arr);
  }
  arr.unshift(sum);
  return [...target, ...arr];
};

const plusOne = (digits) => {
  console.log('hello world');
  return recursion([...digits], []);
};
