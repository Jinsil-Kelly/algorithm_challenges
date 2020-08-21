// https://leetcode.com/problems/intersection-of-two-arrays/
function intersection(nums1, nums2) {
  const solution = nums1.filter((num) => nums2.includes(num));

  const res = new Set(solution);

  return [...res];
}
