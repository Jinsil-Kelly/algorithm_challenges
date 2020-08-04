// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

// Solution 1
const getDecimalValue = (head) => {
  let value = head.val.toString();
  let node = head;

  while (node.next) {
    node = node.next;
    value += node.val.toString();
  }
  return parseInt(value, 2);
};

// Solution 2
const getDecimalValue2 = (head, prev = 0) =>
  !head ? prev : getDecimalValue2(head.next, prev * 2 + head.val);
