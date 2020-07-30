// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

// Time complexity: O(1)
function insertNodeAtHead(head, data) {
  // eslint-disable-next-line no-undef
  const node = new SinglyLinkedListNode(data);
  if (head) node.next = head;
  return node;
}
