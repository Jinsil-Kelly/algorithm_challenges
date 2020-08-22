// https://leetcode.com/problems/pascals-triangle-ii/
function getRow(rowIndex) {
  const res = [];

  while (res.length <= rowIndex) {
    res.unshift(1);
    for (let transfer = 1; transfer < res.length - 1; transfer += 0) {
      res[transfer] += res[transfer + 1];
    }
  }

  return res;
}
