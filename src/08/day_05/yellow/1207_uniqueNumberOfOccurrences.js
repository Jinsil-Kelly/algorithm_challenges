// https://leetcode.com/problems/unique-number-of-occurrences/

const uniqueOccurrences = function (arr) {
  const map = {};
  arr.forEach((num) => {
    map[num] = (map[num] || 0) + 1;
  });
  const arrSet = new Set(Object.values(map));
  return arrSet.size === Object.keys(map).length;
};

// console.log(uniqueOccurrences([1, 2]));
