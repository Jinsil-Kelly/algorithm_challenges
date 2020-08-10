// https://leetcode.com/problems/jewels-and-stones/submissions/

const numJewelsInStones = function (J, S) {
  const MAX = 50;
  if (J > MAX || S > MAX) return 0;

  const jArr = [...J];
  const sArr = [...S];
  const map = {};
  let count = 0;

  jArr.forEach((jewel) => {
    map[jewel] = true;
  });
  sArr.forEach((stone) => {
    if (map[stone]) count += 1;
  });

  return count;
};
