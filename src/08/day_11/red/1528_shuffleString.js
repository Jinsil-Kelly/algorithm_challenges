// https://leetcode.com/problems/shuffle-string/

const restoreString = (s, indices) => {
  const result = [];
  indices.forEach(function (num, index) {
    result[num] = s[index];
  });
  return result.join('');
};
