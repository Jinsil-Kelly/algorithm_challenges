// /** https://leetcode.com/problems/two-sum/*/

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(target - nums[i], i);
  }

  return [-1, -1];
};



//  function sumNumber(nums, target) {
//   for (let x = 0; x < nums.length; x += 0) {
//     for (let y = 0; y < nums.length; y += 0) {
//       if (x !== y) {
//         if (nums[x] + nums[y] === target) {
//           return true;
//         }
//       }
//     }
//   }
// }
