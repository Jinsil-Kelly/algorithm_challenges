// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

const getDecimalValue = (head, target = '') => {
  const str = target + head.val;
  if (!head.next) return parseInt(str, 2);
  return getDecimalValue(head.next, str);
};

// better solutions
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/discuss/536410/
