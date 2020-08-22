// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

const numberOfSteps = (num) => {
  if (!num) return 0;
  let count = 0;

  function recursion(target) {
    count += 1;
    const newNum = target % 2 ? target - 1 : target / 2;
    return newNum ? recursion(newNum) : count;
  }

  return recursion(num);
};
