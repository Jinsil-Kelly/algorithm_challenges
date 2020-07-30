// https://www.hackerrank.com/challenges/apple-and-orange/problem

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const getNumberOfFruits = (tree, fruitsArr) => {
    const passedArr = fruitsArr
      .map((value) => tree + value)
      .filter((value) => value >= s && value <= t);
    return passedArr.length;
  };

  console.log(getNumberOfFruits(a, apples));
  console.log(getNumberOfFruits(b, oranges));
};
