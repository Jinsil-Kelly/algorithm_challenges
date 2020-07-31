// https://www.hackerrank.com/challenges/diagonal-difference/problem

const diagonalDifference = (arr) => {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr[0].length; i += 1) {
    const arrLength = arr[i].length;
    sum1 += arr[i][i];
    sum2 += arr[arrLength - 1 - i][i];
  }
  return Math.abs(sum1 - sum2);
};
