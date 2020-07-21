// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

const kidsWithCandies = (candies, extraCandies) =>
  candies.map(
    (candy) =>
      candy + extraCandies >=
      candies.reduce((acc, cur) => Math.max(acc, cur), 0),
  );
