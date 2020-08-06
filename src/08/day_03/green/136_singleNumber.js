// https://leetcode.com/problems/single-number/

const singleNumber = (nums) =>{
    while(nums.indexOf(nums[0] , 1) > -1){
        nums.push(nums.shift());
    }

    return nums[0];
}

// compact under code
// const singleNumber  = (nums) =>{
//     const map = new Map();
//     let val = 0;

//     for(const x of nums){
//         if(map.has(x)){
//             map.set(x,map.get(x)+1);
//         }
//         else{
//             map.set(x,1);
//         }
//     }
//     console.log(map,'map');
//     for(let [k,v] of map){
//         if(map.get(k) === 1){
//             val = k;
//             break;
//         }
//     }
//     return val;
// }
