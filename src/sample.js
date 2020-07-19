// https://leetcode.com/problems/plus-one/

const recursion = (target, arr) => {
  const sum = target.pop() + 1;
  if (sum === 10) {
    arr.unshift(0);
    return !target.length ? [1, ...arr] : recursion(target, arr);
  }
  arr.unshift(sum);
  console.log('hi');
  return [...target, ...arr];
};

const plusOne = (digits) => {
  return recursion([...digits], []);
};
