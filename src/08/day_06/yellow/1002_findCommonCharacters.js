// https://leetcode.com/problems/find-common-characters/

const commonChars = function (A) {
  let input = [...A];
  const output = [];
  const firstOne = [...A[0].split('')];

  firstOne.forEach((letter) => {
    if (input.every((item) => item.includes(letter))) {
      output.push(letter);
      input = input.map((e) => e.replace(letter, ''));
    }
  });
  return output;
};
// console.log(commonChars(["bella", "label", "roller"]));
