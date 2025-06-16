// Network Delay Time

// You are given a network of n directed nodes, labeled from 1 to n. You are also given times, a list of directed edges where times[i] = (ui, vi, ti).

// ui is the source node (an integer from 1 to n)
// vi is the target node (an integer from 1 to n)
// ti is the time it takes for a signal to travel from the source to the target node (an integer greater than or equal to 0).
// You are also given an integer k, representing the node that we will send a signal from.

// Return the minimum time it takes for all of the n nodes to receive the signal. If it is impossible for all the nodes to receive the signal, return -1 instead.

// Example 1:
// Input: times = [[1,2,1],[2,3,1],[1,4,4],[3,4,1]], n = 4, k = 1
// Output: 3

// Example 2:
// Input: times = [[1,2,1],[2,3,1]], n = 3, k = 2
// Output: -1

// Constraints:
// 1 <= k <= n <= 100
// 1 <= times.length <= 1000


// DFS
// O(E * V) time
// O(E + V) space
function networkDelayTime(times, n, k) {

    const adjList = new Map();
    for (const [source, target, time] of times) {
        if (!adjList.has(source)) adjList.set(source, []);
        adjList.get(source).push([target, time]);
    };

    const distances = Array(n + 1).fill(Number.POSITIVE_INFINITY);
    const dfs = (cur, cost) => {
        if (cost >= distances[cur]) return;

        distances[cur] = cost;
        if (!adjList.get(cur)) return;
        for (const [node, time] of adjList.get(cur)) {
            dfs(node, cost + time);
        }
    }

    dfs(k, 0);
    const res = Math.max(...distances.slice(1));
    return res === Number.POSITIVE_INFINITY ? -1 : res;
}

console.log(networkDelayTime([[1, 2, 1], [2, 3, 1], [1, 4, 4], [3, 4, 1]], 4, 1));
console.log(networkDelayTime([[1, 2, 100], [1, 3, 1], [3, 2, 1]], 3, 1));