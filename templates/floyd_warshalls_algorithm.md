# [Floyd-Warshall Algorithm (All-Pairs Shortest Path)](https://www.youtube.com/watch?v=oNI0rf2P9gE)

This algorithm is used to find the shortest paths between every pair of vertices in a weighted graph. It uses **dynamic programming** to make a sequence of decisions by checking if there is a better path between nodes via an intermediate node.

## Problem Statement

Given a directed graph with `n` vertices, find the shortest distance between every pair of vertices.

## Approach

We create a 2D matrix `dist[][]`, where `dist[i][j]` holds the shortest distance from vertex `i` to vertex `j`.

We initialize this matrix as:
- `dist[i][j] = weight(i, j)` if there is an edge from `i` to `j`.
- `dist[i][j] = 0` if `i == j` (distance to self is zero).
- `dist[i][j] = Infinity` if there is no edge between `i` and `j`.

We then consider each vertex `k` as an **intermediate vertex** and update all distances:

```
dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
```

This is the core of the dynamic programming recurrence.

## Pseudocode

```js
function floydWarshall(graph) {
  const V = graph.length;
  const dist = Array.from({ length: V }, (_, i) =>
    Array.from({ length: V }, (_, j) =>
      i === j ? 0 : graph[i][j] ?? Infinity
    )
  );

  // Dynamic programming step:
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}
```

## Explanation of Formula

At each step, we try to determine if there's a better path from `i` to `j` through `k`. That is:

```
dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
```

- `dist[i][j]`: current known shortest distance from i to j
- `dist[i][k] + dist[k][j]`: the cost of going from i to j via k

This recurrence is applied for all values of `k`, progressively considering all possible intermediate nodes.

## Time Complexity

The Floyd-Warshall algorithm runs in:

```
O(V^3) time
```

because of the three nested loops over `V` vertices.

## Key Notes

- Works for both directed and undirected graphs.
- Can handle negative weights.
- **Does not** work for graphs with **negative cycles**.

To detect negative cycles, just check if `dist[i][i] < 0` after all iterations. If it is, then a negative cycle exists.

## Conclusion

Floyd-Warshall is a simple yet powerful algorithm to compute shortest paths between all pairs of nodes. It's an excellent example of dynamic programming where the solution builds upon intermediate decisions to get the final optimal results.
