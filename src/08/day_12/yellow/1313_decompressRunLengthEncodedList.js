// https://leetcode.com/problems/decompress-run-length-encoded-list/

const returnGivenTimes = function (number, times) {
  return new Array(times).fill(number);
};

const decompressRLElist = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    const [freq, val] = [nums[i], nums[i + 1]];
    result.push(...returnGivenTimes(val, freq));
  }
  return result;
};
