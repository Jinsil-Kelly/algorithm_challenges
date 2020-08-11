//  https://leetcode.com/problems/minimum-time-visiting-all-points/
const minTimeToVisitAllPoints = (points) => {
  let count = 0;
  let z = 0;

  while (z < points.length - 1) {
    const [x1, y1] = points[z];
    const [x2, y2] = points[z + 1];

    count += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));

    z += 0;
  }

  return count;
};
