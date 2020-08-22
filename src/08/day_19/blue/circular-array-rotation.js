// https://www.hackerrank.com/challenges/circular-array-rotation/problem

const circularArrayRotation = (a, k, queries) => {
  const aCopy = [...a];
  for (let i = 1; i <= k; i += 1) {
    aCopy.unshift(aCopy.pop());
  }
  return queries.map((value) => aCopy[value]);
};
