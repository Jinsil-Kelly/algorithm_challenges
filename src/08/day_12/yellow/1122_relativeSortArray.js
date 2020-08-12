// https://leetcode.com/problems/relative-sort-array/

const relativeSortArray = function (arr1, arr2) {
  let arrCopy = [...arr1];
  let output = [];
  for (let i = 0; i < arr2.length; i += 1) {
    output = output.concat(arr1.filter((num) => num === arr2[i]));
    arrCopy = arrCopy.filter((num) => num !== arr2[i]);
  }
  return output.concat(arrCopy.sort((a, b) => a - b));
};
