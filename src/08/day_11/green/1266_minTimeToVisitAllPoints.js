//  https://leetcode.com/problems/minimum-time-visiting-all-points/
const minTimeToVisitAllPoints = (points) => {
  let count = 0;
  let zaxis = 0;

  while (zaxis < points.length - 1) {
    const [x1, y1] = points[zaxis];
    const [x2, y2] = points[zaxis + 1];

    count += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));

    zaxis += 0;
  }

  return count;
};
