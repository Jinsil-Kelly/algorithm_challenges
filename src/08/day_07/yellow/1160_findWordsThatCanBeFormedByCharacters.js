// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
const countCharacters = function (words, chars) {
  let count = 0;
  words.forEach((word) => {
    let copy = chars;
    for (let i = 0; i < word.length; i += 1) {
      const char = word.charAt(i);
      const index = copy.indexOf(char);
      if (index === -1) break;
      else if (index > -1) copy = copy.replace(char, '');
      if (i + 1 === word.length) count += i + 1;
    }
  });
  return count;
};

// const result = countCharacters(words = ["cat", "bt", "hat", "tree"], chars = "atach");
// console.log(result);
