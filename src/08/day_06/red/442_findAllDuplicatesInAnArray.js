// https://leetcode.com/problems/find-all-duplicates-in-an-array/

const findDuplicates = (nums) => {
  const map = {};
  const arr = [];
  nums.forEach((num) => {
    if (!map[num]) {
      map[num] = 1;
    } else {
      arr.push(num);
    }
  });
  return arr;
};

// findDuplicates([4,3,2,7,8,2,3,1])
