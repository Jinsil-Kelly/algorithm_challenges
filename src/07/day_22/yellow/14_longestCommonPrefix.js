// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = function (strs) {
  const inputArr = [...strs];
  if (inputArr.length === 0) {
    return '';
  }

  let prefix = [...inputArr[0]];
  inputArr.shift();

  while (inputArr.length) {
    const comparingInput = [...inputArr.shift()];
    const newPrefix = [];
    for (let i = 0; i < prefix.length; i += 1) {
      if (prefix[i] === comparingInput[i]) {
        newPrefix.push(prefix[i]);
      } else {
        break;
      }
    }
    prefix = newPrefix;
  }
  return prefix.join('');
};

// longestCommonPrefix(["aca", "cba"]);
