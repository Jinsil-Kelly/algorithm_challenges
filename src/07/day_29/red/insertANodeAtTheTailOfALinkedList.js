// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem

function insertNodeAtTail(head, data) {
  // eslint-disable-next-line no-undef
  const linkedList = new SinglyLinkedListNode(data);
  if (!head) return linkedList;

  function recursion(node) {
    if (!node.next) {
      // eslint-disable-next-line no-param-reassign
      node.next = linkedList;
    } else {
      recursion(node.next);
    }
  }

  recursion(head);
  return head;
}
