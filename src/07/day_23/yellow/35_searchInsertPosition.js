// https://leetcode.com/problems/search-insert-position/

const searchInsert = function (nums, target) {
  const arr = [...nums, target].sort(function (a, b) {
    return a - b;
  });
  return arr.indexOf(target);
};

// Binary Search Method
// var searchInsert = function(nums, target) {
//     let start =0 , high = nums.length-1,mid=0
//     while(start <= high){
//         mid = Math.floor((start+high)/2)
//         if(nums[mid] == target){
//             return mid
//         }else if(target > nums[mid]){
//                     start = mid+1
//                  }else if(target < nums[mid]){
//                             high = mid-1
//                           }
//     }
//     return start
// };
