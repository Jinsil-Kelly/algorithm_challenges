// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

const sumZero = (n) => {
  const result = n % 2 ? [0] : [];
  for (let i = 1; i <= n / 2; i += 1) result.push(i, -i);
  return result;
};
