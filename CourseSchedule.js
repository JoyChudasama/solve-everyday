// Course Schedule

// You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a.
// The pair [0, 1], indicates that must take course 1 before taking course 0.
// There are a total of numCourses courses you are required to take, labeled from 0 to numCourses - 1.
// Return true if it is possible to finish all courses, otherwise return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[0,1]]
// Output: true
// Explanation: First take course 1 (no prerequisites) and then take course 0.

// Example 2:
// Input: numCourses = 2, prerequisites = [[0,1],[1,0]]
// Output: false
// Explanation: In order to take course 1 you must take course 0, and to take course 0 you must take course 1. So it is impossible.

// Constraints:
// 1 <= numCourses <= 1000
// 0 <= prerequisites.length <= 1000
// All prerequisite pairs are unique.

// O(vertex + edge) time
// O(vertex + edge) space
function canFinish(numCourses, prerequisites) {
    const adjMap = new Map();
    const currVisiting = new Set();

    for (let i = 0; i < numCourses; i++) adjMap.set(i, []);

    for (const [course, prerequisite] of prerequisites) adjMap.get(course).push(prerequisite);

    const dfs = (course) => {
        if (currVisiting.has(course)) return false;
        if (adjMap.get(course).length === 0) return true;

        currVisiting.add(course);
        for (const prerequisite of adjMap.get(course)) {
            if (!dfs(prerequisite)) return false;
        }

        currVisiting.delete(course);
        adjMap.set(course, []);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
}

// Kahn's Algo
// O(vertex + edge) time
// O(vertex + edge) space
function canFinishBFS(vertices, edges) {
    const adjList = new Map();
    for (let i = 0; i < vertices; i++) adjList.set(i, []);
    for (const [a, b] of edges) adjList.get(a).push(b);

    const indegrees = new Map();
    for (let i = 0; i < vertices; i++) indegrees.set(i, 0);
    for (const [_, neighbors] of adjList) {
        for (const neighbor of neighbors) {
            indegrees.set(neighbor, indegrees.get(neighbor) + 1);
        }
    }

    const q = [];
    for (const [job, deg] of indegrees) {
        if (deg === 0) q.push(job);
    }

    const res = [];
    while (q.length) {
        const cur = q.shift();
        res.push(cur);

        for (const neighbor of adjList.get(cur)) {
            indegrees.set(neighbor, indegrees.get(neighbor) - 1);
            if (indegrees.get(neighbor) === 0) q.push(neighbor);
        }
    }

    return res.length === vertices;
}

console.log(canFinishBFS(2, [[0, 1]]))