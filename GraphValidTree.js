// Graph Valid Tree

// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

// Example 1:
// Input:
// n = 5
// edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
// Output: true

// Example 2:
// Input:
// n = 5
// edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
// Output: false

// Note:
// You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

// Constraints:
// 1 <= n <= 100
// 0 <= edges.length <= n * (n - 1) / 2


// Notes:
// Valid tree is a graph with no cycle and all the nodes are connected
// 

// O(V + E) time
// O(V + E) space
function validTree(n, edges) {
    if (n === 0) return true;

    const adjList = new Map();
    for (let i = 0; i < n; i++) adjList.set(i, []);
    for (const [e1, e2] of edges) {
        adjList.get(e1).push(e2);
        adjList.get(e2).push(e1);
    }

    const visited = new Set();
    const dfs = (currNode, prevNode) => {
        if (visited.has(currNode)) return false;

        visited.add(currNode);

        for (const edge of adjList.get(currNode)) {
            if (edge === prevNode) continue;
            if (!dfs(edge, currNode)) return false;
        }

        return true;
    }

    return dfs(0, -1) && n === visited.size;
}


console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])); // true
console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]])); // false