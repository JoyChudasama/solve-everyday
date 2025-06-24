// Cost to Connect Points

// You are given a 2-D integer array points, where points[i] = [xi, yi]. Each points[i] represents a distinct point on a 2-D plane.
// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between the two points, i.e. |xi - xj| + |yi - yj|.
// Return the minimum cost to connect all points together, such that there exists exactly one path between each pair of points.

// Example 1:
// Input: points = [[0,0],[2,2],[3,3],[2,4],[4,2]]
// Output: 10

// O(V^2) time - because of not using a MinHeap, with MinHeap time would be O(V * Log V)
// O(V) space 
function minCostConnectPoints(points) {
    const distances = new Array(points.length).fill(Infinity); // Minimum cost to connect each node
    const visited = new Set();

    distances[0] = 0; // Start from node 0
    let totalMinCost = 0;

    for (let _ = 0; _ < points.length; _++) {
        // Find the unvisited node with the smallest connection cost
        let minCost = Infinity;
        let currNode = -1;

        for (let i = 0; i < points.length; i++) {
            if (!visited.has(i) && distances[i] < minCost) {
                minCost = distances[i];
                currNode = i;
            }
        }

        totalMinCost += minCost;
        visited.add(currNode);

        // Update distances to all unvisited neighbors
        for (let i = 0; i < points.length; i++) {
            if (!visited.has(i)) {
                const [x1, y1] = points[currNode];
                const [x2, y2] = points[i];
                const cost = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                distances[i] = Math.min(distances[i], cost);
            }
        }
    }

    return totalMinCost;
}


console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 3], [2, 4], [4, 2]]))