// https://leetcode.com/problems/factorial-trailing-zeroes/
// n!을 한 후, 끝에 0이 붙는 개수를 return --> 끝에 0이 나오려면 무조건 5가 곱해져야 함

function trailingZeroes(n) {
  let numbers = 0;
  for (let multipliedNums = 5; multipliedNums <= n; multipliedNums *= 5) {
    numbers += Math.floor(n / multipliedNums);
  }
  return numbers;
}
