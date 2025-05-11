// Valid Binary Search Tree

// Given the root of a binary tree, return true if it is a valid binary search tree, otherwise return false.
// A valid binary search tree satisfies the following constraints:

    // 1. The left subtree of every node contains only nodes with keys less than the node's key.
    // 2. The right subtree of every node contains only nodes with keys greater than the node's key.
    // 3. Both the left and right subtrees are also binary search trees.


// O(n) time
// O(n) space
function isValidBST(root) {
    return this.isValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function isValid(node, min, max) {
    if (node === null) return true;
    if (node.val <= min || node.val >= max) return false;

    return this.isValid(node.left, min, node.val) && this.isValid(node.right, node.val, max);
}