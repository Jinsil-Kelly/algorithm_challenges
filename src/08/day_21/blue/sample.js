// https://leetcode.com/problems/jump-game/
function canJump(nums) {
  let idx = 0;
  let max = 0;
  const target = nums.length - 1;

  while (idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);

    if (max >= target) {
      return true;
    }

    if (max <= idx && nums[idx] === 0) {
      return false;
    }

    idx += 1;
  }

  return false;
}
