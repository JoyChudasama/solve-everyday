# [Dijkstra's Algorithm](https://www.youtube.com/watch?v=XB4MIexjvY0)

Dijkstra's algorithm is a classic greedy algorithm used to solve the **Single Source Shortest Path (SSSP)** problem for a **graph with non-negative edge weights**. 

## Problem Definition
Given a weighted graph and a starting source vertex, find the shortest paths from the source to all other vertices.

- Works on both **directed** and **undirected** graphs.
- Does **not** work correctly with **negative weight edges**.

## Why Greedy?
Dijkstra's algorithm is greedy because it always picks the vertex with the **current minimum distance** and finalizes it (assumes it's the best). It does **not explore all paths**.

## Terminology
- **Relaxation**: Updating the shortest path estimate to a vertex if a better path is found.

```
if dist[source] + cost(source, target) < dist[target]:
    dist[target] = dist[source] + cost(source, target)
```

## Algorithm Steps

### Input
- Graph G(V, E) with non-negative edge weights.
- Source vertex `start`.

### Initialization
```python
for each vertex node:
    dist[node] = infinity
    visited[node] = false

dist[start] = 0
```

### Main Loop
```python
while there are unvisited vertices:
    source = vertex with the smallest dist[source] that is not visited
    visited[source] = true

    for each neighbor target of source:
        if not visited[target]:
            if dist[source] + cost(source, target) < dist[target]:
                dist[target] = dist[source] + cost(source, target)   # Relaxation
```

## Time Complexity
- Using adjacency matrix: **O(V^2)**
- Using priority queue + adjacency list: **O((V + E) log V)** (better)

## Python Implementation
```python
def dijkstra(graph, start):
    import heapq

    # Step 1: Initialize all distances to infinity
    dist = {node: float('inf') for node in graph}
    dist[start] = 0  # Distance to the source is 0

    # Step 2: Priority queue to process nodes in order of current shortest distance
    pq = [(0, start)]  # Tuple format: (distance, node)

    while pq:
        current_dist, source = heapq.heappop(pq)  # Pop the node with smallest distance

        # Skip if we've already found a better path
        if current_dist > dist[source]:
            continue

        # Step 3: Check all neighbors of source
        for target, cost in graph[source]:
            if dist[source] + cost < dist[target]:  # Relaxation step
                dist[target] = dist[source] + cost
                heapq.heappush(pq, (dist[target], target))  # Push updated distance to the queue

    return dist

# Example usage:
graph = {
    1: [(2, 2), (3, 4)],
    2: [(3, 4)],
    3: [],
}
print(dijkstra(graph, 1))
```

## Conclusion
- **Use Dijkstra** when all weights are **non-negative**.
- **Don't use** it when graph contains **negative weights** — use **Bellman-Ford** instead.