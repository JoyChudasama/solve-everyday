// Redundant Connection

// You are given a connected undirected graph with n nodes labeled from 1 to n. Initially, it contained no cycles and consisted of n-1 edges.
// We have now added one additional edge to the graph. The edge has two different vertices chosen from 1 to n, and was not an edge that previously existed in the graph.
// The graph is represented as an array edges of length n where edges[i] = [ai, bi] represents an edge between nodes ai and bi in the graph.
// Return an edge that can be removed so that the graph is still a connected non-cyclical graph. If there are multiple answers, return the edge that appears last in the input edges.

// Example 1:
// Input: edges = [[1,2],[1,3],[3,4],[2,4]]
// Output: [2,4]

// Example 2:
// Input: edges = [[1,2],[1,3],[1,4],[3,4],[4,5]]
// Output: [3,4]

// Constraints:
// n == edges.length
// 3 <= n <= 100
// 1 <= edges[i][0] < edges[i][1] <= edges.length
// There are no repeated edges and no self-loops in the input.

// O(E * α(n)) time
// O(V + E) space
function findRedundantConnection(edges) {
    const n = edges.length;
    const parents = Array.from({ length: n }, (_, i) => i);
    const ranks = new Array(n).fill(0);

    const find = (node) => {
        if (parents[node] !== node) {
            parents[node] = find(parents[node]);
        }

        return parents[node];
    }

    const union = (v1, v2) => {
        const node1 = find(v1);
        const node2 = find(v2);

        // cycle detected OR already connected
        if (node1 === node2) return false;

        if (ranks[node1] < ranks[node2]) {
            parents[node1] = node2;
        } else if (ranks[node1] > ranks[node2]) {
            parents[node2] = node1;
        } else {
            parents[node2] = node1;
            ranks[node1] += 1;
        }

        return true;
    }

    for (const [u, v] of edges) {
        if (!union(u, v)) return [u, v];
    }
}

console.log(findRedundantConnection([[1, 2], [1, 3], [1, 4], [3, 4], [4, 5]]));