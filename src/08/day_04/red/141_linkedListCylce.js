// https://leetcode.com/problems/linked-list-cycle/

const hasCycle = (head) => {
  if (head == null || head.next == null) return false;

  let ptr1 = head;
  let ptr2 = head.next;

  while (ptr1 !== ptr2) {
    if (ptr2 == null || ptr2.next == null) return false;

    ptr1 = ptr1.next;
    ptr2 = ptr2.next.next;
  }
  return true;
};
