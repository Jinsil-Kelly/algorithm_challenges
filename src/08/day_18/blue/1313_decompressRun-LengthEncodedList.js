// https://leetcode.com/problems/decompress-run-length-encoded-list/

const decompressRLElist = (nums) => {
  return nums.reduce(
    (acc, cur, i, arr) =>
      i % 2 ? [...acc, ...Array(arr[i - 1]).fill(cur)] : acc,
    [],
  );
};
