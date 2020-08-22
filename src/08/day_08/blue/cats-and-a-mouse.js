// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

const catAndMouse = (x, y, z) => {
  const catAfromMouse = Math.abs(z - x);
  const catBfromMouse = Math.abs(z - y);
  const catA = 'Cat A';
  const catB = 'Cat B';
  const mouseC = 'Mouse C';

  if (catAfromMouse === catBfromMouse) return mouseC;
  if (catAfromMouse < catBfromMouse) {
    return catA;
  }
  return catB;
};
