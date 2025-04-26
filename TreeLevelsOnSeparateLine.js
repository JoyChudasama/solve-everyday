class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function printLevelsOnNewLine(root) {
    const dict = {};
    helper(root, 1, dict);

    for (const key in dict) {
        console.log(dict[key])
    }

    return dict;
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

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log(printLevelsOnNewLine(root));