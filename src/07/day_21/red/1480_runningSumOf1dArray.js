// https://leetcode.com/problems/running-sum-of-1d-array/

const runningSum = (nums) =>
  nums.reduce((acc, num, i) => {
    const prevSum = acc[i - 1] || 0;
    acc.push(num + prevSum);
    return acc;
  }, []);
