// https://www.hackerrank.com/challenges/bon-appetit/problem

const bonAppetit = (bill, k, b) => {
  bill.splice(k, 1);
  const Anna = bill.reduce((acc, cur) => acc + cur) / 2;
  console.log(b === Anna ? 'Bon Appetit' : b - Anna);
};
