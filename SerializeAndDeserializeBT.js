// Serialize and Deserialize Binary Tree

// Implement an algorithm to serialize and deserialize a binary tree.
// Serialization is the process of converting an in-memory structure into a sequence of bits so that it can be stored or sent across a network to be reconstructed later in another computer environment.
// You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure. There is no additional restriction on how your serialization/deserialization algorithm should work.

// O(n) time
// O(n) space
function serialize(root) {
    if (root === null) return '';
    const arr = [];

    const dfs = (node) => {
        if (node === null) {
            arr.push('N');
            return;
        }

        arr.push(node.val.toString());
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return arr.join(',');
}


// O(n) time
// O(n) space
function deserialize(data) {
    if (data === '') return null;
    const arr = data.split(',');
    const indexRef = { val: 0 };

    const dfs = () => {
        if (arr[i] === 'N') {
            indexRef.val += 1;
            return null;
        }

        const root = new TreeNode(parseInt(arr[indexRef.val]));
        indexRef.val += 1;
        root.left = dfs();
        root.right = dfs();
        return root;
    }

    return dfs();
}