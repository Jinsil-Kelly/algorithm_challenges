// https://leetcode.com/problems/maximum-subarray/
function maxSubArray(nums) {
  let cs = nums[0];
  // current
  let ms = nums[0];
  // maximum
  for (let i = 1; i < nums.length; i += 0) {
    cs = Math.max(nums[i], cs + nums[i]);
    if (cs > ms) {
      ms = cs;
    }
  }
  return ms;
}
