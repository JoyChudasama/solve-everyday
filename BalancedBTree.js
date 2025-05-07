// Balanced Binary Tree

// Given a binary tree, return true if it is height-balanced and false otherwise.
// A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:
// Input: root = [1,2,3,null,null,4]
// Output: true

// Example 2:
// Input: root = [1,2,3,null,null,4,null,5]
// Output: false

// Example 3:
// Input: root = []
// Output: true


// O(n^2) time where n is the number of nodes and n^2 because we have recursive calls on every single nodes for its subtree
// O(n) space where n is the number of nodes 
function isBalanced(root) {
    if (root === null) return true;

    let left = this.getHeight(root.left);
    let right = this.getHeight(root.right);

    if (Math.abs(left - right) > 1) return false;
    return this.isBalanced(root.left) && this.isBalanced(root.right);
}

function getHeight(curr) {
    if (curr === null) return 0;

    return (1 + Math.max(this.getHeight(curr.left), this.getHeight(curr.right)));
}