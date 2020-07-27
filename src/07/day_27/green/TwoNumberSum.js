// O(n^n) | O(1) space
exports.twoSum1 = (nums, target) => {
    // basic error handling
    if (typeof nums !== 'object') {
        return [];
    }

    if (!Array.isArray(nums)) {
        throw new Error('nums must be array');
    }

    if (typeof target !== 'number' || target < 0) {
        throw new Error('target number must be integer!');
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]];
            }
        }
    }

    return [];
};

// O(n)time | O(n) space
exports.twoSum2 = (nums, target) => {
    // basic error handling
    if (typeof nums !== 'object') {
        return [];
    }

    if (!Array.isArray(nums)) {
        throw new Error('nums must be array');
    }

    if (typeof target !== 'number' || target < 0) {
        throw new Error('target number must be integer!');
    }

    const hashMap = {};

    for (let num of nums) {
        const subtractedNum = target - num;

        if (hashMap.hasOwnProperty(subtractedNum)) {
            return [subtractedNum, num];
        } else {
            hashMap[num] = true;
        }
    }
    return [];
};

// O(nlog(n)) | O(1) space
exports.twoSum3 = (nums, target) => {
    // basic error handling
    if (typeof nums !== 'object') {
        return [];
    }

    if (!Array.isArray(nums)) {
        throw new Error('nums must be array');
    }

    if (typeof target !== 'number' || target < 0) {
        throw new Error('target number must be integer!');
    }

    // sort array to ascending order
    const sortedNums = nums.sort((a, b) => a - b);

    let left = 0,
        right = sortedNums.length - 1;

    while (left < right) {
        const sum = sortedNums[left] + sortedNums[right];

        if (sum === target) {
            return [sortedNums[left], sortedNums[right]];
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }

    return [];
};
