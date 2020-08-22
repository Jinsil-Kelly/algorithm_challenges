// https://www.hackerrank.com/challenges/counting-valleys/problem

const countingValleys = (n, s) => {
  let currentLevel = 0;
  let valleys = 0;

  for (let i = 0; i < n; i += 1) {
    if (s[i] === 'U') {
      currentLevel += 1;
      if (currentLevel === 0) valleys += 1;
    } else {
      currentLevel -= 1;
    }
  }
  return valleys;
};
