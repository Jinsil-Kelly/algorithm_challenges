// https://leetcode.com/problems/single-number/

const singleNumber = (nums) => {
  const arr = [...nums].sort((a, b) => a - b);

  while (arr.length >= 1) {
    if (arr.length === 1) return arr[0];

    if (arr[0] !== arr[1]) {
      return arr[0];
    }
    arr.splice(0, 2);
  }
  return null;
};
