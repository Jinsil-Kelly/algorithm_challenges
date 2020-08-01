// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

function insertNodeAtTail(head, data) {
  // eslint-disable-next-line no-undef
  const linkedList = new SinglyLinkedListNode(data);
  if (!head) return linkedList;

  function recursion(node) {
    const n = node;
    if (!n.next) {
      n.next = linkedList;
    } else {
      recursion(n.next);
    }
  }

  recursion(head);
  return head;
}
