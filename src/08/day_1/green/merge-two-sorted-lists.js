function mergeTwoLists(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  const node = l1.val < l2.val ? l1 : l2;

  if (l1.val < l2.val) {
    node.next = mergeTwoLists(l1.next, l2);
  } else {
    node.next = mergeTwoLists(l1, l2.next);
  }

  return node;
}

mergeTwoLists();

// /*const mergeTwoLists = function(l1, l2) {
//   if (!l1 || !l2)
//   return l1 || l2;
//   const linkThem = (smaller, greater) => {
//        mergeTwoLists(smaller.next, greater);
//       return smaller;
//   };
//   return l1.val < l2.val ? linkThem(l1,l2) : linkThem(l2,l1);
// };
