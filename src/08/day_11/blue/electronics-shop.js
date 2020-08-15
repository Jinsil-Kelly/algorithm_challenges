// https://www.hackerrank.com/challenges/electronics-shop/problem

const getMoneySpent = (keyboards, drives, b) => {
  return keyboards.reduce(
    (acc, cur) =>
      Math.max(
        acc,
        ...drives.map((usb) => usb + cur).filter((sum) => b >= sum),
      ),
    -1,
  );
};
