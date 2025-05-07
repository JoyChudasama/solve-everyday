// Diameter of Binary Tree

// The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.
// The length of a path between two nodes in a binary tree is the number of edges between the nodes.
// Given the root of a binary tree root, return the diameter of the tree.

// Example 1:
// Input: root = [1,null,2,3,4,5]
// Output: 3

// Example 2:
// Input: root = [1,2,3]
// Output: 2

// O(n) time where n is the number of nodes in the given tree
// O(n) space where n is the number of function calls on a stack
function diameterOfBinaryTree(root) {
    let res = Number.NEGATIVE_INFINITY;

    const dfs = (curr) => {
        if (curr === null) return 0;

        const left = dfs(curr.left);
        const right = dfs(curr.right);
        res = Math.max(res, (left + right));
        return Math.max(left, right) + 1;
    }

    dfs(root);
    return res;
}