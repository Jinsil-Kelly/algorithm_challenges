// https://leetcode.com/problems/maximum-product-of-three-numbers/
function maximumProduct(nums) {
  nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3],
  );
}
