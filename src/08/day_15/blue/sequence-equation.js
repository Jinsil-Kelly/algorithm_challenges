// https://www.hackerrank.com/challenges/permutation-equation/problem

const permutationEquation = (p) => {
  const resultArr = [];
  for (let i = 1; i <= p.length; i += 1) {
    resultArr.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }
  return resultArr;
};
