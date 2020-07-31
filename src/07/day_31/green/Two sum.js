// /** https://leetcode.com/problems/two-sum/*/

function TwoSum(nums, target) {
  for (let x = 0; x < nums.length; x += 0) {
    for (let y = 0; y < nums.length; y += 0) {
      if (x !== y) {
        if (nums[x] + nums[y] === target) {
          return [x, y];
        }
      }
    }
  }
}
TwoSum();
