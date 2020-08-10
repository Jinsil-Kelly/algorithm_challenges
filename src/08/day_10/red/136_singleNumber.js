// https://leetcode.com/problems/single-number/
// https://leetcode.com/problems/single-number/solution/

// const singleNumber = (nums) => [...nums].sort((a,b)=>a-b).reduce((acc,cur,i)=> i%2 ? acc-cur:acc+cur,0)

// eslint-disable-next-line no-bitwise
const singleNumber = (nums) => nums.reduce((acc, cur) => acc ^ cur, 0);
