// it is very simlar to the two number sum
// the only difference is that you have to return the array of three numbers which their sum match with target value.
// futher details will be updated later

// O(n^2) | O(n) space
exports.threeNumberSum = (nums, target) => {
  nums.sort((a, b) => a - b);
  const triplets = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++; // eslint-disable-line no-plusplus
        right--; // eslint-disable-line no-plusplus
      } else if (sum < target) {
        left++; // eslint-disable-line no-plusplus
      } else if (sum > target) {
        right--; // eslint-disable-line no-plusplus
      }
    }
  }
  return triplets;
};
