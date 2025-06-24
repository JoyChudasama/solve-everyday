# Kruskal's Algorithm: Step-by-Step Guide

Kruskal's Algorithm is a **greedy algorithm** used to find the **Minimum Spanning Tree (MST)** of a weighted undirected graph. It builds the MST by always choosing the edge with the smallest weight that doesn’t form a cycle.

---

## ✅ Requirements for Kruskal's Algorithm
- The graph **must be connected**.
- All edge weights must be **non-negative**.

---

## 🔍 Key Idea
1. **Always pick the smallest available edge**.
2. **Avoid cycles** — if adding an edge creates a cycle, skip it.
3. **Continue until (V - 1)** edges are added, where `V` is the number of vertices.

---

## 🧮 Algorithm Steps

### 1. **Sort all edges** in ascending order of weight.

### 2. Initialize an empty MST and a **Union-Find (Disjoint Set Union)** data structure to detect cycles.

### 3. For each edge in the sorted list:
   - If the edge connects two different components (i.e., doesn't form a cycle):
     - Add it to the MST
     - Union the two sets
   - Otherwise, skip it.

### 4. Stop when MST contains exactly `V - 1` edges.

## ⏱️ Time Complexity

### Without heap:
- Sorting edges: **O(E log E)**
- Union-Find operations: **O(E * α(V))** (with path compression)

### With min-heap:
- You can get the next smallest edge in **O(log E)** time
- Improves performance for dense graphs

---

## ⚠️ Important Notes

- Kruskal's Algorithm **fails on disconnected graphs** — you won’t get a full spanning tree, but **a spanning forest** instead.
- Use **Union-Find** to efficiently detect and prevent cycles.

---

## 📌 Summary
- Choose minimum edge
- Avoid cycles using Union-Find
- Stop at V - 1 edges
- Works only for **connected**, **undirected**, **weighted** graphs
