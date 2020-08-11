// https://www.hackerrank.com/challenges/sock-merchant/problem

const sockMerchant = (n, ar) => {
  const arr = [...ar].sort((a, b) => a - b);
  let count = 0;
  while (arr.length) {
    if (arr[0] === arr[1]) {
      count += 1;
      arr.splice(0, 2);
    } else {
      arr.shift();
    }
  }
  return count;
};
