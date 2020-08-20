// https://www.hackerrank.com/challenges/equality-in-a-array/problem

const equalizeArray = (arr) => {
  const map = new Map();
  arr.forEach((num) => map.set(num, map.get(num) + 1 || 1));
  return arr.length - Math.max(...map.values());
};
