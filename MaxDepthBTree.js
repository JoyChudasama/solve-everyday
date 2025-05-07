// Maximum Depth of Binary Tree

// Given the root of a binary tree, return its depth.
// The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [1,2,3,null,null,4]
// Output: 3

// Example 2:
// Input: root = []
// Output: 0


// O(n) time where n is the number of nodes
// O(n) space where n is the number of recursive calls on call stack which would be as many as nodes in the given tree
function maxDepth(root) {
    return helper(root, 0, Number.NEGATIVE_INFINITY);
}

function helper(curr, currDepth) {
    if (curr === null) return currDepth;

    const leftMax = helper(curr.left, currDepth + 1)
    const rightMax = helper(curr.right, currDepth + 1)

    return Math.max(leftMax, rightMax);
}