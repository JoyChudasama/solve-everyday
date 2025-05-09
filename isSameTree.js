// Same Binary Tree

// Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.
// Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [4,7], q = [4,null,7]
// Output: false

// Example 3:
// Input: p = [1,2,3], q = [1,3,2]
// Output: false

// DFS
// O(n) time where n is the number of nodes in the given tree
// O(n) space where n is the number of recursive calls on stack
function isSameTree(p, q) {
    if (p === null && q === null) return true;

    if (p !== null && q !== null && p.val === q.val) {
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }

    return false;
}

// BFS
// O(n) time where n is the number of nodes in the given tree
// O(n) space where n is the length of queue
function isSameTree(p, q) {
    const queue = [[p, q]];
    let isSame = true;

    while (queue.length > 0) {
        const [a, b] = queue.shift();

        if (a === null && b === null) continue;

        if (a && b && a.val === b.val) {
            queue.push([a.left, b.left]);
            queue.push([a.right, b.right]);
            continue;
        }

        isSame = false;
        break;
    }

    return isSame;
}