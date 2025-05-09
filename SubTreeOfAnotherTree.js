isSubtree(root, subRoot) {
    // find the subtree

    const findSubTreeNode = (curr, targetValue) => {
        if (curr === null) return null;

        if (curr.val !== targetValue) {
            findSubTreeNode(curr.left, targetValue);
            findSubTreeNode(curr.right, targetValue);
        }

        return curr;
    }

    // check if left and right matches for both trees
    const subTree = findSubTreeNode(root, subRoot.val);
    console.log(subTree, subRoot.val)
    const isSame = (p, q) => {
        if (p === null && q === null) return true;

        if (p && q && p.val === q.val) {
            return isSame(p.left, q.left) === isSame(p.right, q.right);
        }

        return false;
    }

    return isSame(subTree, subRoot);
}