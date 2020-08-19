// https://leetcode.com/problems/word-pattern/
function wordPattern(pattern, str) {
  const Pat = pattern.split('');
  const StrSplit = str.split(' ');
  const box = [];
  const dictionary = {};
  if (Pat.length !== StrSplit.length) {
    return false;
  }
  for (let words = 0; words < Pat.length; words += 0) {
    if (!dictionary[Pat[words]]) {
      dictionary[Pat[words]] = StrSplit[words];
      if (box.indexOf(StrSplit[words]) !== -1) {
        return false;
      }
      box.push(StrSplit[words]);
    } else if (dictionary[Pat[words]] !== StrSplit[words]) {
      return false;
    }
  }
  return true;
}
