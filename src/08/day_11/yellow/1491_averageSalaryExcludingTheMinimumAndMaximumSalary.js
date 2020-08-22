// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

const average = function (salary) {
  const sorted = [...salary].sort((a, b) => a - b);
  sorted.shift();
  sorted.pop();
  return sorted.reduce((acc, curr) => acc + curr) / sorted.length;
};

// console.log(average(salary = [4000, 3000, 1000, 2000]));
