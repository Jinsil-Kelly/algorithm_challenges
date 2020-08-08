// https://leetcode.com/problems/jewels-and-stones/

const numJewelsInStones = (J, S) => {
  const set = new Set(J);
  return [...S].reduce((acc, cur) => (set.has(cur) ? acc + 1 : acc), 0);
};

// const J = "aA"
// const S = "aAAbbbb"
// console.log(numJewelsInStones(J,S))
