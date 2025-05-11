// Construct Binary Tree from Preorder and Inorder Traversal

// You are given two integer arrays preorder and inorder.

//      1. preorder is the preorder traversal of a binary tree
//      2. inorder is the inorder traversal of the same tree
//      3. Both arrays are of the same size and consist of unique values.

// Rebuild the binary tree from the preorder and inorder traversals and return its root.

// Example 1:
// Input: preorder = [1,2,3,4], inorder = [2,1,3,4]
// Output: [1,2,3,null,null,null,4]

// Example 2:
// Input: preorder = [1], inorder = [1]
// Output: [1]


// O(n) time
// O(n) space
function buildTree(preorder, inorder) {
    let preOrdIdx = 0, inOrdIdx = 0;

    const dfs = (limit) => {
        if (preOrdIdx >= preorder.length) return null;

        if (inorder[inOrdIdx] === limit) {
            inOrdIdx += 1;
            return null;
        }

        const root = new TreeNode(preorder[preOrdIdx++]);
        root.left = dfs(root.val);
        root.right = dfs(limit);

        return root;
    }

    return dfs(Infinity);
}