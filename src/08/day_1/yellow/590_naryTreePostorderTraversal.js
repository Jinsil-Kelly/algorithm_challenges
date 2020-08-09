// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

const postorder = function (root) {
    let arr = [];
    function postOrder(node) {
        if (!node) return arr;

        for (let child of node.children) {
            postOrder(child);
        }

        arr.push(node.val);
        return arr;
    }
    return postOrder(root);
};
