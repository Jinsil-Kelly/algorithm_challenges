// https://leetcode.com/problems/peak-index-in-a-mountain-array/

const peakIndexInMountainArray = function (A) {
  return A.indexOf(Math.max(...A));
};

// console.log(peakIndexInMountainArray([0, 10, 5, 2]));
