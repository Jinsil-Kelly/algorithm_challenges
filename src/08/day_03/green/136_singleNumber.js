// https://leetcode.com/problems/single-number/
let singleNumber  = function(nums){
    let map = new Map();
    let val = 0;

    for(let x of nums){
        if(map.has(x)){
            map.set(x,map.get(x)+1);
        }
        else{
            map.set(x,1);
        }
    }
    console.log(map,'map');
    for(let [k,v] of map){
        if(map.get(k) === 1){
            val = k;
            break;
        }
    }
    return val;
}
