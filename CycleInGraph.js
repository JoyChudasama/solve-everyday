// Cycle In Graph 

// You're given alist of ledges. representing an unweighted, directed graph with at least one node. Write a function that returns a 
// boolean representing whether the given graph contains a cycle.
// For the purpose of this question, a cycle is defined as any number of vertices, including just one vertex, that are connected in a dosed
// chain. A cycle can also be defined as a chain of at least one vertex in which the first vertex is the same as the last. 
// ‘The given list is what's called an adjacency lst. and it represents a graph. The number of vertices in the graph is equal to the length of
// edges . where each index [4 in ledges contains vertex i 's outbound edges, in no particular order. Each individual edge is 
// represented by a positive integer that denotes an index (a destination vertex) in the list that this vertex is connected to. Note that these 
// edges are directed, meaning that you can only travel from a particular vertex to its destination, not the other way around (unless the 
// destination vertex itself has an outbound edge to the original vertex). 
// Also note that this graph may contain self-loops. A self-loop is an edge that has the same destination and origin; in other words, itsan 
// edge that connects a vertex to itself. For the purpose of this question, a self-loop is considered a cycle. 
// For a more detailed explanation, please refer to the Conceptual Overview section of this question's video explanation.

// O(v+e) time
// O(v) space
function cycleInGraph(edges) {
    const visited = new Set();
    const visiting = new Set();

    const dfs = (node) => {
        if (visiting.has(node)) return true;
        if (visited.has(node)) return false;

        visiting.add(node);

        for (let neighbor of edges[node]) {
            if (dfs(neighbor)) return true;
        }

        visiting.delete(node);
        visited.add(node);

        return false;
    }

    for (let i = 0; i < edges.length; i++) {
        if (dfs(i)) return true;
    }

    return false;
}