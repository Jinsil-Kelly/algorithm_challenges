// https://leetcode.com/problems/fizz-buzz/

const fizzBuzz = (n) => {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const arr = [];

  for (let i = 1; i <= n; i += 1) {
    if (!(i % (3 * 5))) {
      arr.push(FIZZ + BUZZ);
    } else if (!(i % 3)) {
      arr.push(FIZZ);
    } else if (!(i % 5)) {
      arr.push(BUZZ);
    } else arr.push(i.toString());
  }
  return arr;
};

// console.log(fizzBuzz(15));
