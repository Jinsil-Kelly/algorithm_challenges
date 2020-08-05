// https://leetcode.com/problems/reverse-linked-list/

const reverseList = (head, previous = null) => {
  const node = head;
  if (node === null) return previous;
  const { next } = node;
  node.next = previous;
  return reverseList(next, node);
};

// const reverseList = (head)=> {
//   if(!head) return head;
//
//   const recursion = (node, newHead)=>{
//     const newNode = new ListNode(node.val,newHead)
//     if(!node.next) return newNode;
//     return recursion(node.next, newNode)
//   }
//   return recursion(head,null)
//
// };
