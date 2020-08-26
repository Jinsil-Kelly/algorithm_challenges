// https://www.hackerrank.com/challenges/minimum-distances/problem

const minimumDistances = (a) => {
  let min;
  for (let i = 0; i < a.length; i += 1) {
    const indexOfMatch = a.indexOf(a[i], i + 1);

    if (indexOfMatch > -1) {
      min = !min ? indexOfMatch - i : Math.min(min, indexOfMatch - i);
    }
  }
  return min || -1;
};
