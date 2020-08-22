// https://www.hackerrank.com/challenges/migratory-birds/problem

const migratoryBirds = (arr) => {
  const result = new Array(6).fill(0);
  for (let i = 0; i < arr.length; i += 1) {
    result[arr[i]] += 1;
  }
  const index = result.reduce((a, b) => Math.max(a, b));
  return result.indexOf(index);
};
