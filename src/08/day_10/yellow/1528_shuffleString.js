// https://leetcode.com/problems/shuffle-string/

const restoreString = function (s, indices) {
  const result = [];
  for (let i = 0; i < s.length; i += 1) {
    result[indices[i]] = s.charAt(i);
  }
  return result.join('');
};

// console.log(restoreString(s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3]));
