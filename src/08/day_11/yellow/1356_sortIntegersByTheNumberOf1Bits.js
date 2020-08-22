// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

const sortByBits = function (arr) {
  const sorted = [];
  let result = [];
  arr.forEach((num) => {
    const bits = num.toString(2).replace(/[0]/g, '').length;
    if (sorted[bits]) sorted[bits].push(num);
    else sorted[bits] = [num];
  });
  sorted.forEach((element) => {
    element.sort((a, b) => a - b);
    result = result.concat(element);
  });
  return result;
};

// console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
