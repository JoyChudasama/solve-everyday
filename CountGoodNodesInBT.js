// Count Good Nodes in Binary Tree

// Within a binary tree, a node x is considered good if the path from the root of the tree to the node x contains no nodes with a value greater than the value of node x
// Given the root of a binary tree root, return the number of good nodes within the tree.

// Example 1:
// Input: root = [2,1,1,3,null,1,5]
// Output: 3


// Example 2:
// Input: root = [1,2,-1,3,4]
// Output: 4

// O(n) time
// O(n) space
function goodNodes(root) {
    return inOrderTraversal(root, root.val, 0);
}

function inOrderTraversal(node, maxSoFar) {
    if (!node) return 0;

    let count = 0;
    if (node.val >= maxSoFar) {
        count = 1;
        maxSoFar = node.val;
    }

    count += inOrderTraversal(node.left, maxSoFar);
    count += inOrderTraversal(node.right, maxSoFar);

    return count;
}