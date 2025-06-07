// Number of Connected Components in an Undirected Graph

// There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means that there is an edge between node a and node b in the graph.
// The nodes are numbered from 0 to n - 1.
// Return the total number of connected components in that graph.

// Example 1:
// Input:
// n=3
// edges=[[0,1], [0,2]]
// Output: 1

// Example 2:
// Input:
// n=6
// edges=[[0,1], [1,2], [2,3], [4,5]]
// Output: 2

// Constraints:
// 1 <= n <= 100
// 0 <= edges.length <= n * (n - 1) / 2

// O(V + E) time
// O(V + E) space
function countComponents(n, edges) {

    const adjList = new Map();
    for (let i = 0; i < n; i++) adjList.set(i, []);
    for (const [e1, e2] of edges) {
        adjList.get(e1).push(e2);
        adjList.get(e2).push(e1);
    }

    const visited = new Set();
    let connected = 0;
    const dfs = (curr, prev) => {
        if (visited.has(curr)) return false;

        visited.add(curr);
        for (const e of adjList.get(curr)) {
            if (e === prev) continue;
            if (dfs(e)) connected += 1;
        }

        return true;
    }

    for (let i = 0; i < n; i++) dfs(i, -1);

    return n - connected;
}

console.log(countComponents(3, [[0, 1], [0, 2]]));
console.log(countComponents(6, [[0, 1], [1, 2], [2, 3], [4, 5]]));