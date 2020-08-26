// https://leetcode.com/problems/remove-element/

const removeElement = (nums, val) => {
  const arr = [...nums];
  let len = arr.length;
  let i = 0;
  while (i < len) {
    if (arr[i] === val) {
      arr[i] = arr[len - 1];
      len -= 1;
    } else i += 1;
  }
  return len;
};
