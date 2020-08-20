// https://leetcode.com/problems/edit-distance/
const minDistance = (word1, word2) => {
  const memo = new Map();

  function run(w1, w2) {
    if (memo.has(`${w1}-${w2}`)) return memo.get(`${w1}-${w2}`);
    if (w1 >= word1.length && w2 >= word2.length) return 0;

    // if it's a match
    if (word1[w1] === word2[w2]) return run(w1 + 1, w2 + 1);

    let insert = Infinity;
    let del = Infinity;
    let replace = Infinity;

    // insert
    if (w2 < word2.length) insert = run(w1, w2 + 1);

    // delete
    if (w1 < word1.length) del = run(w1 + 1, w2);

    // replace
    if (w1 < word1.length && w2 < word2.length) replace = run(w1 + 1, w2 + 1);

    const res = Math.min(insert, del, replace) + 1;
    memo.set(`${w1}-${w2}`, res);
    return res;
  }
  return run(0, 0);
};
