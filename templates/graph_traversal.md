# Graph Traversal

## Traversal On Adjacency List

```js
// Sample adjacency list (0-indexed graph)
const graph = [
	[1, 2], // Node 0 is connected to nodes 1 and 2
	[0, 3], // Node 1 is connected to nodes 0 and 3
	[0], // Node 2 is connected to node 0
	[1], // Node 3 is connected to node 1
];

// Visuals: 0 → 1
//          ↓   ↓
//          2   3
```

> ### DFS

#### Steps

1. Create a visited set.
2. Recursively visit all unvisited neighbors.
3. Skip already visited nodes.

```js
function dfs(node, graph, visited = new Set()) {
	if (visited.has(node)) return;

	visited.add(node);
	console.log(node); // Process the node

	for (const neighbor of graph[node]) {
		dfs(neighbor, graph, visited);
	}
}

dfs(0, graph);
```

> ### BFS

#### Steps

1. Use a queue.
2. Add the starting node and mark it visited.
3. While the queue is not empty:
   - Dequeue the front node.
   - Visit all unvisited neighbors and enqueue them.

```js
function bfs(start, graph) {
	const visited = new Set();
	const queue = [start];
	visited.add(start);

	while (queue.length > 0) {
		const node = queue.shift();
		console.log(node); // Process the node

		for (const neighbor of graph[node]) {
			if (!visited.has(neighbor)) {
				visited.add(neighbor);
				queue.push(neighbor);
			}
		}
	}
}

bfs(0, graph);
```