// https://www.hackerrank.com/challenges/strange-advertising/problem

const viralAdvertising = (n) => {
  let days = n;
  let likes = Math.floor(5 / 2);
  let resultLikes = likes;

  while (days > 1) {
    likes = Math.floor((likes * 3) / 2);
    resultLikes += likes;
    days -= 1;
  }
  return resultLikes;
};
