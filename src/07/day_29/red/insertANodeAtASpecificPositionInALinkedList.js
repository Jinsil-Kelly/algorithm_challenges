// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

// Time complexity: O(n)
function insertNodeAtPosition(head, data, position) {
  // eslint-disable-next-line no-undef
  const newNode = new SinglyLinkedListNode(data);
  if (!position) {
    newNode.next = head;
    return head;
  }

  let count = 0;

  function findNode(node) {
    count += 1;
    return count === position ? node : findNode(node.next);
  }

  const node = findNode(head);

  newNode.next = node.next;
  node.next = newNode;

  return head;
}
