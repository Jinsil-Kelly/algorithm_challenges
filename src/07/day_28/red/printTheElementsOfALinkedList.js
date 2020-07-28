// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

function printLinkedList(head) {
  console.log(head.data);
  return head.next ? printLinkedList(head.next) : null;
}
