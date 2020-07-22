// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (nums) => new Set(nums).size !== nums.length;
