// https://leetcode.com/problems/remove-outermost-parentheses/

const removeDuplicates = function (S) {
  const arr = [...S];
  let { length } = arr;

  for (let i = 0; i < length - 1; i += 1) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i -= 2;
      if (i < 0) {
        i = -1;
      }
      length -= 1;
    }
  }
  return arr.join('');
};

// console.log(removeDuplicates("abbaca"));
