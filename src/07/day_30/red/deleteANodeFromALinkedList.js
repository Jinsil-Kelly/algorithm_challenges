// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem

// Time complexity: O(n)
function deleteNode(head, position) {
  if (!position) {
    return head.next;
  }

  let count = 0;

  function findNode(node) {
    count += 1;
    return count === position ? node : findNode(node.next);
  }

  const node = findNode(head);
  node.next = node.next.next;

  return head;
}
