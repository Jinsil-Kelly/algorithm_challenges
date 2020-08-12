//  https://leetcode.com/problems/implement-strstr/submissions/
function strStr(haystack, needle) {
  if (!needle) {
    return 0;
  }
  //   let pre means prestack
  for (let pre = 0; pre < haystack.length; pre += 0) {
    if (haystack[pre] === needle[0]) {
      const sub = haystack.substring(pre, pre + needle.length);
      //   sub means  additional stack
      if (sub === needle) {
        return pre;
      }
    }
  }

  return -1;
}
