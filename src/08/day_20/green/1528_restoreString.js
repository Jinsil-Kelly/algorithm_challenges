// https://leetcode.com/problems/shuffle-string/
function restoreString(s, idx) {
  const result = [];
  for (let indices = 0; indices < s.length; indices += 0) {
    result[idx[indices]] = s[indices];
  }
  return result.join('');
}
