// https://www.hackerrank.com/challenges/compare-two-linked-lists/problem

function CompareLists(llist1, llist2) {
  if (!llist1 && !llist2) return 1;
  if (llist1 && !llist2) return 0;
  if (!llist1 && llist2) return 0;
  if (llist1.data !== llist2.data) return 0;
  return CompareLists(llist1.next, llist2.next);
}
