// https://www.hackerrank.com/challenges/the-hurdle-race/problem

const hurdleRace = (k, height) => {
  const highestHurdle = Math.max.apply(null, height);
  return highestHurdle <= k ? 0 : highestHurdle - k;
};
