// https://www.hackerrank.com/challenges/the-birthday-bar/problem

const birthday = (s, d, m) => {
  let count = 0;
  while (s.length >= m) {
    if (s.slice(0, m).reduce((acc, cur) => acc + cur) === d) {
      count += 1;
    }
    s.shift();
  }
  return count;
};
