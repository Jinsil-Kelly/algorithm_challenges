// https://leetcode.com/problems/smallest-range-i/

const smallestRangeI = (A, K) => {
  return Math.max(...A) - K - (Math.min(...A) + K) < 0
    ? 0
    : Math.max(...A) - K - (Math.min(...A) + K);
};
