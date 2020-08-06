// https://leetcode.com/problems/valid-anagram/
function isAnagram(s, t) {
  const slength = s.length;
  const tlength = t.length;
  if (slength !== tlength) {
    return false;
  }
  for (let x = 0; x < slength; x += 0) {
    if (!t.includes(s[x])) {
      return false;
    }
    t.replace(s[x], '');
  }
  return true;
}
