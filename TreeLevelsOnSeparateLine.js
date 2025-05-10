// Binary Tree Level Order Traversal

// Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// O(n) time where n is the number of nodes in tree
// O(n) space where n is the number of recursive calls on callstack
function printLevelsOnNewLine(root) {
    const dict = {};
    helper(root, 1, dict);
    console.log(Object.values(dict))
    return '';
}

function helper(node, level, dict) {
    if (node === null) return;

    if (!(level in dict)) {
        dict[level] = [];
    }

    dict[level].push(node.value);
    helper(node.left, level + 1, dict);
    helper(node.right, level + 1, dict);
}


function printLevelsOnNewLine2(root) {
    const levels = [];

    const dfs = (node, level) => {
        if (node === null) return;
        if (level - 1 === levels.length) levels.push([]);
        levels[level - 1].push(node.val);
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 1);
    return levels;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log(printLevelsOnNewLine(root));