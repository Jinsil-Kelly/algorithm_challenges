// https://leetcode.com/problems/defanging-an-ip-address/

// Solution 1
const defangIPaddress = (address) => {
  const newArr = address.split('.');
  for (let i = 1; i < newArr.length; i += 2) {
    newArr.splice(i, 0, '[.]');
  }
  return newArr.join('');
};

// Solution 2
const defangIPaddr = (address) => {
  let result = '';
  for (let i = 0; i < address.length; i += 1) {
    if (address[i] !== '.') {
      result += address[i];
    } else {
      result += '[.]';
    }
  }
  return result;
};
