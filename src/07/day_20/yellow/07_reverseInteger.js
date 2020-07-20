// https://leetcode.com/problems/reverse-integer/

const reverse = function (x) {
  const inputStr = x.toString().split('');
  const resultArr = [];

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

  if ((-2) ** 31 > resultNum || 2 ** 31 - 1 < resultNum) {
    return 0;
  }
  return resultNum;
};

// reverse(-213);
