// https://leetcode.com/problems/single-number/
var singleNumber = function(nums) {
     return nums.reduce((res, n) => res ^ n, 0)
 };
