// https://leetcode.com/problems/implement-strstr/

const strStr = function (haystack, needle) {
  if (needle === '' || haystack === needle) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i += 1) {
    if (
      haystack[i] === needle[0] &&
      haystack.slice(i, i + needle.length) === needle
    ) {
      return i;
    }
  }
  return -1;
};

// const result = strStr("hello", "ll");
// console.log(result);
