// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

const breakingRecords = (scores) => {
  let [highest, lowest] = [scores[0], scores[0]];
  let [maxCount, minCount] = [0, 0];

  for (let i = 1; i < scores.length; i += 1) {
    if (scores[i] > highest) {
      highest = scores[i];
      maxCount += 1;
    }
    if (scores[i] < lowest) {
      lowest = scores[i];
      minCount += 1;
    }
  }

  return [maxCount, minCount];
};
