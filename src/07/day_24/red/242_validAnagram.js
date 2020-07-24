// https://leetcode.com/problems/valid-anagram/

// Solution 1
// var isAnagram = function(s, t) {
//   if (s.length !== t.length) return false;
//   const sortedS = [...s].sort();
//   const sortedT = [...t].sort();
//
//   while (sortedS.length) {
//     if (sortedT.pop() !== sortedS.pop()) return false;
//   }
//   return true;
// };

// Solution 2
const regexp = /^[a-z]+$/;
const checkOnlyLowerAlpha = (s, t) => regexp.test(s) && regexp.test(t);

const isString = (s, t) => typeof s === 'string' && typeof t === 'string';

const createMap = (target) => {
  const obj = {};

  for (let i = 0; i < target.length; i += 1) {
    const key = target[i];
    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }

  return obj;
};

const isAnagram = (s, t) => {
  try {
    if (!isString(s, t)) throw new Error('s and t must be string');
    if (!s && !t) return true;
    if (s.length !== t.length) return false;
    if (!checkOnlyLowerAlpha(s, t))
      throw new Error('s and t must contain only lowercase alphabets');

    const mapS = createMap(s);
    const mapT = createMap(t);
    const keys = Object.keys(mapS);

    for (let i = 0; i < keys.length; i += 1) {
      if (mapS[keys[i]] !== mapT[keys[i]]) return false;
    }

    return true;
  } catch (e) {
    return console.log(`${e.name}: ${e.message}`);
  }
};
// console.log(isAnagram(null, 'anagram'));
