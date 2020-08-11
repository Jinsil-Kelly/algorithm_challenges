// https://leetcode.com/problems/destination-city/
const destCity = function (paths) {
  const pathmap = paths.reduce((map, [s, e]) => map.set(s, e), new Map());
  let destination = paths[0][0];
  while (pathmap.has(destination)) {
    destination = pathmap.get(destination);
  }
  return destination;
};

// console.log(destCity([["A", "Z"]]));
