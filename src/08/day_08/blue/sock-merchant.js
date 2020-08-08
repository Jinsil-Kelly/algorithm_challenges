// https://www.hackerrank.com/challenges/sock-merchant/problem

const sockMerchant = (n, ar) => {
  ar.sort((a, b) => a - b);
  let count = 0;
  while (ar.length) {
    if (ar[0] === ar[1]) {
      count += 1;
      ar.splice(0, 2);
    } else {
      ar.shift();
    }
  }
  return count;
};
