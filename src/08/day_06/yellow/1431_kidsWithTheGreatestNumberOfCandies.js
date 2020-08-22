// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
const kidsWithCandies = function (candies, extraCandies) {
  const answer = [];
  const mx = Math.max(...candies);
  for (let i = 0; i < candies.length; i += 1) {
    answer.push(candies[i] + extraCandies >= mx);
  }
  return answer;
};
