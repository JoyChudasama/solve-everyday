// Invert Binary Tree

// You are given the root of a binary tree root. Invert the binary tree and return its root.

// Example 1:
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,3,2,7,6,5,4]

// Example 2:
// Input: root = [3,2,1]
// Output: [3,1,2]

// Example 3:
// Input: root = []
// Output: []

// O(n) time where n is the number of nodes in the given tree
// O(n) space where n is the length of queue 
function invertTree(root) {
    if (root === null) return root;

    const q = [root];

    while (q.length > 0) {

        const curr = q.shift();
        const currLeft = curr.left;
        const currRight = curr.right;

        if (currLeft) q.push(currLeft);
        if (currRight) q.push(currRight);

        curr.left = currRight;
        curr.right = currLeft;
    }

    return root;
}