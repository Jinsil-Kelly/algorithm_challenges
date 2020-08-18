// https://leetcode.com/problems/relative-sort-array/

const relativeSortArray = (arr1, arr2) => {
  let resultArr = [];
  let restArr = [...arr1];
  for (let i = 0; i < arr2.length; i += 1) {
    resultArr = resultArr.concat(arr1.filter((num) => num === arr2[i]));
    restArr = restArr.filter((num) => num !== arr2[i]).sort((a, b) => a - b);
  }
  return resultArr.concat(restArr);
};
