// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

// Solution 1
const numberOfSteps = (num) => {
  let count = 0;
  let targetNum = num;
  while (targetNum) {
    targetNum = targetNum % 2 ? (targetNum -= 1) : (targetNum /= 2);
    count += 1;
  }
  return count;
};

// Solution 2
const numberOfSteps2 = (num, count = 0) => {
  if (!num) return count;
  return num % 2
    ? numberOfSteps2(num - 1, count + 1)
    : numberOfSteps2(num / 2, count + 1);
};
