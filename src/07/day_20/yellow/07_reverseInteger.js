// https://leetcode.com/problems/reverse-integer/

const reverse = function (x) {
  const inputStr = x.toString().split('');
  const resultArr = [];
  const MIN = (-2) ** 31;
  const MAX = 2 ** 31 - 1;

  if (inputStr[0] === '-') {
    resultArr.push('-');
    for (let i = inputStr.length - 1; i > 0; i -= 1) {
      resultArr.push(inputStr[i]);
    }
  } else {
    for (let i = inputStr.length - 1; i >= 0; i -= 1) {
      resultArr.push(inputStr[i]);
    }
  }
  const resultNum = parseInt(resultArr.join(''), 10);

  if (MAX > resultNum || MIN < resultNum) {
    return 0;
  }
  return resultNum;
};

// reverse(-213);
