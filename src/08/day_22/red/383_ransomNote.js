// https://leetcode.com/problems/ransom-note/

const canConstruct = (ransomNote, magazine) => {
  const map = {};

  for (let i = 0; i < magazine.length; i += 1) {
    map[magazine[i]] = (map[magazine[i]] || 0) + 1;
  }

  for (let i = 0; i < ransomNote.length; i += 1) {
    if (!map[ransomNote[i]]) return false;
    map[ransomNote[i]] -= 1;
  }
  return true;
};
