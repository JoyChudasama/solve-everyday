// Youngest Common Ancestor 

// You're given three inputs, all of which are instances of an AncestralTree class that have an (ancestor property pointing to their
// youngest ancestor. The first input is the top ancestor in an ancestral tree (i.e. the only instance that has no ancestor-its (ancestor property points to ‘None / nulLL)). and the other two inputs are descendants in the ancestral tree. 

// Write a function that returns the youngest common ancestor to the two descendants. 
// Note that a descendant is considered its own ancestor. So in the simple ancestral tree below, the youngest common ancestor to nodes A and B is node A.

class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

// O(h) time where h is the height of the tree
// O(h) space where h is the height of the tree
function getYoungestCommonAncestor(root, nodeOne, nodeTwo) {
    const ancestorDict = {};

    let cur = nodeOne;
    while (cur) {
        ancestorDict[cur.name] = true;
        cur = cur.ancestor
    }

    cur = nodeTwo;
    while (cur) {
        if (ancestorDict[cur.name]) return cur;
        cur = cur.ancestor
    }

    return false;
}

// O(h) time where h is the height of the tree
// O(1) space
function getYoungestCommonAncestor(root, nodeOne, nodeTwo) {
    
    const getDepth = (node) => {
        let depth = 0;
        while (node) {
            depth += 1;
            node = node.ancestor;
        }
        return depth;
    }

    // get depth of both node to determine deeper node
    let node1Depth = getDepth(nodeOne);
    let node2Depth = getDepth(nodeTwo);

    // bring the deeper node on the same level as the shallow node
    if (node1Depth > node2Depth) {
        while (node1Depth > node2Depth) {
            nodeOne = nodeOne.ancestor;
            node1Depth -= 1;
        }
    } else {
        while (node2Depth > node1Depth) {
            nodeTwo = nodeTwo.ancestor;
            node2Depth -= 1;
        }
    }

    // move up both together untill they are same
    while (nodeOne !== nodeTwo) {
        nodeOne = nodeOne.ancestor;
        nodeTwo = nodeTwo.ancestor;
    }

    return nodeOne;
}