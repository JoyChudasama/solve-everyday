// Clone Graph

// Given a node in a connected undirected graph, return a deep copy of the graph.
// Each node in the graph contains an integer value and a list of its neighbors.
// The graph is shown in the test cases as an adjacency list. An adjacency list is a mapping of nodes to lists, used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
// For simplicity, nodes values are numbered from 1 to n, where n is the total number of nodes in the graph. The index of each node within the adjacency list is the same as the node's value (1-indexed).
// The input node will always be the first node in the graph and have 1 as the value.

// O(vertices + edges) time
// O(vertices + edges) space
function cloneGraph(node) {

    if (!node) return null;

    const nodeMap = new Map();
    nodeMap.set(node, new Node(node.val));

    const q = [node];

    while (q.length > 0) {
        const cur = q.shift();

        for (const neighbor of cur.neighbors) {
            if (!nodeMap.has(neighbor)) {
                nodeMap.set(neighbor, new Node(neighbor.val));
                q.push(neighbor);
            }
            nodeMap.get(cur).neighbors.push(nodeMap.get(neighbor));
        }
    }

    return nodeMap.get(node);
}
