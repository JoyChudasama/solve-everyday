## [Bellman-Ford Algorithm](https://www.youtube.com/watch?v=FtN3BYH2Zes&t)

> "Try all possible paths and choose the best" — that’s dynamic programming in action!

### Problem:
Find the **shortest path** from a **single source** vertex to all other vertices in a **directed weighted graph**, even when **some edges have negative weights**.

### Why Not Dijkstra?
Dijkstra's algorithm fails with **negative edge weights**. Bellman-Ford handles this properly.

### Concept:
- Initialize distances from source to all vertices as Infinity, except source itself (0).
- **Relax all edges (V - 1) times**, where V = number of vertices.
- In each relaxation, if `dist[u] + weight < dist[v]`, update `dist[v]`.
- After (V - 1) iterations, perform one more to **detect negative cycles**.


### JavaScript Implementation
```js
function bellmanFord(vertices, edges, source) {
  const dist = new Array(vertices).fill(Infinity);
  dist[source] = 0;

  // Relax all edges (vertices - 1) times
  for (let i = 0; i < vertices - 1; i++) {
    for (const [u, v, weight] of edges) {
      if (dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight;
      }
    }
  }

  // Check for negative-weight cycles
  for (const [u, v, weight] of edges) {
    if (dist[u] + weight < dist[v]) {
      console.log("Graph contains a negative weight cycle");
      return null;
    }
  }

  return dist;
}

// Example: Graph with 7 vertices (0 to 6)
const edges = [
  [0, 1, 6],
  [0, 2, 5],
  [0, 3, 5],
  [1, 4, -1],
  [2, 1, -2],
  [2, 4, 1],
  [3, 2, -2],
  [4, 5, -1],
  [5, 6, 3],
  [4, 6, 3]
];

const vertices = 7;
const source = 0;
const result = bellmanFord(vertices, edges, source);

if (result) {
  console.log("Shortest distances from source:", result);
}
```

### Time Complexity:
- Each relaxation: O(E)
- Total: O(V * E)
- For complete graphs, can go up to **O(V³)**

### Key Points:
- Can handle **negative weights**.
- Can **detect negative weight cycles**.
- Slower than Dijkstra’s, but more reliable in edge cases.

### Drawback:
If a **negative weight cycle** exists, Bellman-Ford can’t give a valid result, but it can detect such cycles by checking if any edge still relaxes after `V - 1` iterations.

