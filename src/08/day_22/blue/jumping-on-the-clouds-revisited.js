// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

const jumpingOnClouds = (c, k) => {
  const n = c.length;
  let energy = 100;
  for (let i = 0; ; ) {
    i += k;
    if (i >= n) i %= n;
    energy -= !c[i] ? 1 : 3;

    if (!i) break;
  }
  return energy;
};
