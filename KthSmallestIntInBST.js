// Kth Smallest Integer in BST

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

// A binary search tree satisfies the following constraints:
//     1. The left subtree of every node contains only nodes with keys less than the node's key.
//     2. The right subtree of every node contains only nodes with keys greater than the node's key.
//     3. Both the left and right subtrees are also binary search trees.

// Example 1:
// Input: root = [2,1,3], k = 1
// Output: 1

// Example 2:
// Input: root = [4,3,5,2,null], k = 4
// Output: 5

// O(n) time
// O(n) space
function kthSmallest(root, k) {
    const treeValues = this.inOrderTraversal(root, []);
    return treeValues[k - 1];
}

function inOrderTraversal(node, array) {
    if (node === null) return;
    this.inOrderTraversal(node.left, array);
    array.push(node.val);
    this.inOrderTraversal(node.right, array);

    return array
}