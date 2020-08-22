// https://leetcode.com/problems/rotate-array/
function rotate(nums, k) {
  if (!nums || !nums.length) return;
  if (k >= nums.length) {
    const K = k % nums.length;
  }
  nums.splice(0, 0, ...nums.splice(nums.length - k));
}
