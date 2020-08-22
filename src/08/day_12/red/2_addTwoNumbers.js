// https://leetcode.com/problems/add-two-numbers/

const addTwoNumbers = function (l1, l2) {
  if (!l2) return l1;
  if (!l1) return l2;
  const sum = l1.val + l2.val;
  const mod = sum % 10;
  const carry = sum < 10 ? null : { val: 1 };
  return {
    val: mod,
    next: addTwoNumbers(l1.next, addTwoNumbers(l2.next, carry)),
  };
};
