// https://leetcode.com/problems/climbing-stairs/
// 꼭대기에 도착하려면 계단 n개를 올라야함 --> 1번에 1계단 또는 2계단 오를 수 있음 --> 꼭대기까지 갈 수 있는 방법의 수는?
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

/*
    이전,현재,일시적인 상태로 나누기
    3개의 계단을 올라야 꼭대기에 도착하는 경우 
    (1+1+1)-> 1계단씩만 오르기
    (1+2) -> 1계단/2계단
    (2+1) -> 2계간/1계단
    4개의 계단을 올라야 꼭대기에 도착하는 경우
    (1+1+1+1)
    (1+1+ +2)
    (1+2+ +1)
    (2+ +1+1)
    (2+   +2)
    -> 5가지
    */

    // 꼭대기에 있어야하는 건 현재니깐 반환하는건 현재여야함 
