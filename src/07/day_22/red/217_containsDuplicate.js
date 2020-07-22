// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (nums) => new Set(nums).size !== nums.length;

// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([2,3,1]))
