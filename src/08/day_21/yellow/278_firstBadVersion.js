// https://leetcode.com/problems/first-bad-version

const solution = function (isBadVersion) {
  return function (n) {
    const binarySearch = (low, high) => {
      if (high - low <= 1) {
        return isBadVersion(low) ? low : high;
      }
      const mid = low + Math.floor((high - low) / 2);
      return isBadVersion(mid)
        ? binarySearch(low, mid)
        : binarySearch(mid, high);
    };
    return binarySearch(1, n);
  };
};
