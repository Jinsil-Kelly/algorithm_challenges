// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

const beautifulDays = (i, j, k) => {
  let count = 0;
  for (let day = i; day <= j; day += 1) {
    const reversedNum = Number([...String(day)].reverse().join(''));
    if (Number.isInteger(Math.abs(day - reversedNum) / k)) count += 1;
  }
  return count;
};
