// https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const getLast = (node) => {
  if (!node.next) return node;
  return getLast(node.next);
};

const mergeTwoLists = (l1, l2, head = null) => {
  if (!l1 && !l2) return head;

  if (!head) {
    if (!l1) return l2;
    if (!l2) return l1;

    if (l1.val === l2.val) {
      return mergeTwoLists(
        l1.next,
        l2.next,
        new ListNode(l1.val, new ListNode(l2.val, null)),
      );
    }

    if (l1.val > l2.val) {
      return mergeTwoLists(l1, l2.next, new ListNode(l2.val, null));
    }
    if (l1.val < l2.val) {
      return mergeTwoLists(l1.next, l2, new ListNode(l1.val, null));
    }
  }

  const lastNode = getLast(head);

  if (!l1 && l2) {
    lastNode.next = l2;
    return head;
  }
  if (l1 && !l2) {
    lastNode.next = l1;
    return head;
  }

  if (l1.val === l2.val) {
    lastNode.next = new ListNode(l1.val, new ListNode(l2.val, null));
    return mergeTwoLists(l1.next, l2.next, head);
  }

  if (l1.val > l2.val) {
    lastNode.next = new ListNode(l2.val, null);
    return mergeTwoLists(l1, l2.next, head);
  }
  if (l1.val < l2.val) {
    lastNode.next = new ListNode(l1.val, null);
    return mergeTwoLists(l1.next, l2, head);
  }

  return null;
};
