// it is very simlar to the two number sum
// the only difference is that you have to return the array of three numbers which their sum match with target value.

// O(n^2) | O(n) space
exports.threeNumberSum = (nums, target) => {
    Array.sort((a,b) => a - b);
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
        let lett = i + 1;
        let right = nums.length - 1;
        while (letf < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                triplets.push([nums[i], nums[left], nums[right]]);
                left++;
                right++;
            } else if (sum < target) {
                left++;
                right--;
            }
        }
    }
    return triplets;
}
