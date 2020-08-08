// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

const catAndMouse = (x, y, z) => {
  const catAfromMouse = Math.abs(z - x);
  const catBfromMouse = Math.abs(z - y);

  if (catAfromMouse === catBfromMouse) return 'Mouse C';
  if (catAfromMouse < catBfromMouse) {
    return 'Cat A';
  }
  return 'Cat B';
};
