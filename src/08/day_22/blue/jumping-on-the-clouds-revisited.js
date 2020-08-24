// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

const jumpingOnClouds = (c, k) => {
  let index = 0;
  let e = 100;

  do {
    index = (index + k) % c.length;
    e -= c[index] ? 3 : 1;
  } while (index);

  return e;
};
