// Topological Sort - BFS/Kahn's Algorithm 

// It works by repeatedly removing nodes with zero indegree (i.e., no incoming edges), ensuring that all dependencies are resolved before a node is processed.

// How It Works

// Build the graph (adjacency list).
// Calculate indegree (number of incoming edges) for each node.
// Initialize a queue with all nodes that have 0 indegree.
// While the queue is not empty:
// Remove a node from the queue.
// Add it to the topological order.
// Decrease the indegree of its neighbors by 1.
// If any neighbor’s indegree becomes 0, add it to the queue.
// If the result contains all nodes, return it. Otherwise, a cycle exists, and topological sorting is not possible.

// O(vertices + edges) time
// O(vertices + edges) space
function topologicalSort(vertices, edges) {
    const adjList = new Map();
    for (let i = 0; i < vertices; i++) adjList.set(i, []);
    for (const [a, b] of edges) adjList.get(a).push(b);

    const indegrees = new Map();
    for (let i = 0; i < vertices; i++) indegrees.set(i, 0);
    for (const [_, neighbors] of adjList) {
        for (const neighbor of neighbors) {
            indegrees.set(neighbor, indegrees.get(neighbor) + 1);
        }
    }

    const q = [];
    for (const [job, deg] of indegrees) {
        if (deg === 0) q.push(job);
    }

    const res = [];
    while (q.length) {
        const cur = q.shift();
        res.push(cur);

        for (const neighbor of adjList.get(cur)) {
            indegrees.set(neighbor, indegrees.get(neighbor) - 1);
            if (indegrees.get(neighbor) === 0) q.push(neighbor);
        }
    }

    return res.length !== vertices ? [] : res;
}

console.log(topologicalSort(4, [[0, 1], [0, 2], [1, 2], [2, 3]]));
console.log(topologicalSort(3, [[0, 1], [1, 2], [2, 0]])); // cycle