// https://leetcode.com/problems/to-lower-case/

const toLowerCase = (str) => {
  const strArr = [...str];

  for (let i = 0; i < str.length; i += 1) {
    const code = strArr[i].charCodeAt(0);

    if (code >= 65 && code <= 90) {
      strArr[i] = String.fromCharCode(code + 32);
    }
  }
  return strArr.join('');
};
