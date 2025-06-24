# Prim's Algorithm: Step-by-Step Guide to Minimum Cost Spanning Tree (MST)

Prim's Algorithm helps us find the **Minimum Cost Spanning Tree (MST)** from a **connected, weighted graph**. The MST is a subset of edges that connects all vertices without forming cycles and with the **least total edge weight**. 

- Implement this with a priority queue (Min Heap) for efficiency in code



## Step-by-Step Template for Applying Prim's Algorithm

### ✅ Prerequisites
- The graph must be **connected**.
- The graph must be **undirected** and **weighted**.



### 📌 Step 1: Start with the Minimum Weight Edge
- Find the **smallest weight edge** in the entire graph.
- Select it as the starting edge.



### 📌 Step 2: Build the Tree Incrementally
For the remaining steps:
1. **Always pick the smallest edge** that connects a **visited/selected node** to an **unvisited node**.
2. **Ignore edges** that connect two already-selected vertices (to avoid cycles).
3. Continue until all vertices are included in the tree.



### 💡 Key Rules
- Maintain a **set of selected vertices**.
- For every iteration:
  - From all edges connected to the selected vertices, pick the one with the **minimum cost** that goes to an **unselected vertex**.
- Repeat until you have **(V - 1) edges** where `V` is the number of vertices.

### 🚫 Important Note
If the graph is **disconnected** (e.g., two separate components), Prim's algorithm **cannot** generate a spanning tree for the whole graph.
- It will only cover the component connected to the **starting node**.
- A spanning tree **must** cover all vertices in the graph.


### 🧠 Summary
| Step                  | Action                                      |
|-----------------------|---------------------------------------------|
| 1. Start              | Pick the smallest edge                      |
| 2. Expand             | Add smallest edge connecting to tree       |
| 3. Avoid cycles       | Only connect unvisited nodes               |
| 4. Stop condition     | When MST has (V - 1) edges                 |
