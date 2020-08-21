// https://leetcode.com/problems/intersection-of-two-arrays/

const intersection = function (nums1, nums2) {
  const res = new Set(nums1.filter((num) => nums2.includes(num)));
  return [...res];
};

// console.log(intersection(nums1 = [1, 2, 2, 1], nums2 = [2, 2]));
