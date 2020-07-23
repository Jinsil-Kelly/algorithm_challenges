// https://leetcode.com/problems/add-binary/

// I wrote very inefficient one and failed, will update tomorrow!

// var addBinary = function(a, b) {
//     let i = a.length - 1, j = b.length - 1, carry = 0, res = '';

//     while (i >= 0 || j >= 0 || carry) {
//         let num1 = +a[i] || 0, num2 = +b[j] || 0;
//         let sum = num1 + num2 + carry;

//         carry = sum > 1;
//         res = sum % 2 + res;
//         i--;
//         j--;
//     }

//     return res;
// };

// const result = addBinary("11", "1");
// console.log(result);
