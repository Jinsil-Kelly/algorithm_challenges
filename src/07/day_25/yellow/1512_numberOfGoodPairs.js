// https://leetcode.com/problems/number-of-good-pairs/submissions/

// const numIdenticalPairs = function (nums) {
//     let count = 0;

//     for (let i = 0; i < nums.length; i += 1) {
//         nums.forEach((num, index) => {
//             if (num === nums[i] && index < i) {
//                 count += 1;
//             }
//         })
//     }
//     return count;
// };

const numIdenticalPairs = function (nums) {
  let count = 0;
  const map = new Map();
  nums.forEach((num) => {
    if (!map.has(num)) map.set(num, 1);
    else {
      const currentCount = map.get(num);
      count += currentCount;
      map.set(num, currentCount + 1);
    }
  });
  return count;
};
