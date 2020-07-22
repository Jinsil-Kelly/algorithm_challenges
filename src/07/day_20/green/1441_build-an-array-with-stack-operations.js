// https://leetcode.com/problems/build-an-array-with-stack-operations/

/**
 * @param {number[]} target
 * @param {number}
 * @return {string[]}
 */
const buildArray = function (target) {
  const arr = [];
  for (let i = 1; i <= target[target.length - 1]; i += 1) {
    if (target.includes(i)) {
      arr.push('Push');
    } else {
      arr.push('Push', 'Pop');
    }
  }
  return arr;
};
