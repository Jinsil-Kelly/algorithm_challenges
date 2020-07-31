// https://leetcode.com/problems/reverse-linked-list/

const reverseList = (head, previous = null) => {
  const node = head;
  if (node === null) return previous;
  const { next } = node;
  node.next = previous;
  return reverseList(next, node);
};
