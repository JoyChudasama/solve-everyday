// Binary Tree Right Side View

// You are given the root of a binary tree. Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.

// Example 1:
// Input: root = [1,2,3]
// Output: [1,3]

// Example 2:
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,3,7]


// O(n) time
// O(n) space simplified from O(h+n)
function rightSideView(root) {
    const levels = {};
    const res = [];
    this.getLevels(root, 1, levels);

    for (const key in levels) {
        res.push(levels[key][0])
    }

    return res;
}

function getLevels(node, currLevel, levels) {

    if (node === null) return;
    if (!levels[currLevel]) levels[currLevel] = [];

    levels[currLevel].push(node.val);

    this.getLevels(node.right, currLevel + 1, levels);
    this.getLevels(node.left, currLevel + 1, levels);
}