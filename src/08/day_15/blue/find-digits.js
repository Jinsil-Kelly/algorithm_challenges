// https://www.hackerrank.com/challenges/find-digits/problem

const findDigits = (n) => {
  const splitedArr = [...String(n)];
  return splitedArr.filter((num) => n % Number(num) === 0).length;
};
