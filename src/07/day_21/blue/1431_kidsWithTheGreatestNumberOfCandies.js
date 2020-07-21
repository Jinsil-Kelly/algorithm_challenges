// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

const kidsWithCandies = (candies, extraCandies) => {
  const greatestNumber = Math.max(...candies);
  return candies.map((kid) => kid + extraCandies >= greatestNumber);
};
