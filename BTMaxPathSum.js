// Binary Tree Maximum Path Sum

// Given the root of a non-empty binary tree, return the maximum path sum of any non-empty path.
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them. A node can not appear in the sequence more than once. The path does not necessarily need to include the root.
// The path sum of a path is the sum of the node's values in the path.

// Example 1:
// Input: root = [1,2,3]
// Output: 6
// Explanation: The path is 2 -> 1 -> 3 with a sum of 2 + 1 + 3 = 6.

// Example 2:
// Input: root = [-15,10,20,null,null,15,5,-5]
// Output: 40
// Explanation: The path is 15 -> 20 -> 5 with a sum of 15 + 20 + 5 = 40.

// O(n) time
// O(n) space
function maxPathSum(root) {
    const res = [root.val];
    this.dfs(root, res);
    return res[0];
}

function dfs(node, res) {

    if (node === null) return 0;

    let maxLeft = this.dfs(node.left, res);
    let maxRight = this.dfs(node.right, res);
    maxLeft = Math.max(maxLeft, 0);
    maxRight = Math.max(maxRight, 0);

    res[0] = Math.max(res[0], node.val + maxLeft + maxRight);

    return node.val + Math.max(maxLeft, maxRight);
}