// https://leetcode.com/problems/minimum-time-visiting-all-points/

const minTimeToVisitAllPoints = (points) => {
  let times = 0;
  for (let i = 1; i < points.length; i += 1) {
    const p0 = points[i - 1];
    const p1 = points[i];
    times += Math.max(Math.abs(p1[0] - p0[0]), Math.abs(p1[1] - p0[1]));
  }
  return times;
};
