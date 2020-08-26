// https://leetcode.com/problems/climbing-stairs/
function climbStairs(n) {
  let previous = 0;
  // 계단 밟기 전 상태
  let current = 1;
  // 계단 밟은 현재 상태
  let temporary;
  // 아직 정해지지 않은 일시적인 상태

  for (let stairsStates = 0; stairsStates < n; stairsStates += 1) {
    temporary = previous;
    previous = current;
    current += temporary;
  }
  return current;
}
