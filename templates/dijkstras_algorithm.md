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
if dist[u] + cost(u, v) < dist[v]:
    dist[v] = dist[u] + cost(u, v)
```

## Algorithm Steps

### Input
- Graph G(V, E) with non-negative edge weights.
- Source vertex `s`.

### Initialization
```python
for each vertex v:
    dist[v] = infinity
    visited[v] = false

dist[s] = 0
```

### Main Loop
```python
while there are unvisited vertices:
    u = vertex with the smallest dist[u] that is not visited
    visited[u] = true

    for each neighbor v of u:
        if not visited[v]:
            if dist[u] + cost(u, v) < dist[v]:
                dist[v] = dist[u] + cost(u, v)   # Relaxation
```

## Example
Consider this directed graph:
```
    1 --2--> 2
    1 --4--> 3
    2 --4--> 3
```

### Step-by-step:
1. Start from vertex 1: `dist[1] = 0`, all others = infinity.
2. Visit vertex 1: update `dist[2] = 2`, `dist[3] = 4`
3. Visit vertex 2 (smaller distance): update `dist[3] = min(4, 2+4) = 4`
4. Visit vertex 3: no further updates

**Final distances**:
```
dist[1] = 0
dist[2] = 2
dist[3] = 4
```


## Time Complexity
- Using adjacency matrix: **O(V^2)**
- Using priority queue + adjacency list: **O((V + E) log V)** (better)


## Limitations
Dijkstra's algorithm fails in presence of **negative weight edges**. For example:

```
1 --3--> 2
2 --(-10)--> 3
1 --5--> 4
4 --2--> 3
```

Dijkstra picks 2 first and assumes `dist[3] = 3 + (-10) = -7` is not possible, missing the shorter path via 4. Hence, **it may give incorrect results** with negative edges.


## Python Implementation
```python
def dijkstra(graph, start):
    import heapq

    # Step 1: Initialize all distances to infinity
    dist = {v: float('inf') for v in graph}
    dist[start] = 0  # Distance to the source is 0

    # Step 2: Priority queue to process nodes in order of current shortest distance
    pq = [(start, 0)]  # Tuple format: (node, distance)

    while pq:
        u, current_dist = heapq.heappop(pq)  # Pop the node with smallest distance

        # Skip if we've already found a better path
        if current_dist > dist[u]:
            continue

        # Step 3: Check all neighbors of u
        for v, weight in graph[u]:
            if dist[u] + weight < dist[v]:  # Relaxation step
                dist[v] = dist[u] + weight
                heapq.heappush(pq, (v, dist[v]))  # Push updated distance to the queue

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

