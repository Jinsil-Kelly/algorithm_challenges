// https://leetcode.com/problems/jewels-and-stones/

const numJewelsInStones = (J, S) => {
  const set = new Set(J);
  return S.split('').reduce((acc, cur) => (set.has(cur) ? acc + 1 : acc), 0);
};
