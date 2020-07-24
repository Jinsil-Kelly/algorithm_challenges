// https://leetcode.com/problems/check-if-n-and-its-double-exist/

const checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const double = arr[i] * 2;
    const index = arr.indexOf(double);
    if (index !== -1 && index !== i) {
      return true;
    }
  }
  return false;
};

// const result = checkIfExist([-2, 0, 10, -19, 4, 6, -8]);
// console.log(result);
