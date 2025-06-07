// Topological Sort

// You're given a list of arbitrary jobs that need to be completed; these jobs are represented by distinct integers. 
// You're also given a list of dependencies. A dependency is represented as a pair of jobs where the first job is a prerequisite of the second one. 
// In other words, the second job depends on the first one; it can only be completed once the first job is completed. 
// Write a function that takes in a list of jobs and a list of dependencies and returns alist containing a valid order in which the given jobs can be completed. 
// If no such order exists, the function should return an empty array.

// Sample Input:
// jobs = [1, 2, 3, 4] 
// deps = [[1, 21, [1, 3], [3, 2], [4, 2], [4, 31]]

function topologicalSort(jobs, deps) {
    const adjList = new Map();
    for (let i = 0; i < jobs.length; i++) adjList.set(jobs[i], []);
    for (const [a, b] of deps) adjList.get(b).push(a);

    const alreadyVisited = new Set();
    const currVisiting = new Set();
    const res = [];

    const dfs = (dep) => {
        if (currVisiting.has(dep)) return false;

        if (alreadyVisited.has(dep)) return true;

        currVisiting.add(dep);
        for (const i of adjList.get(dep)) {
            if (!dfs(i)) return false;
        }

        currVisiting.delete(dep);
        alreadyVisited.add(dep);
        res.push(dep);

        return true;
    }

    for (const job of jobs) {
        if (!dfs(job)) return [];
    }

    return res;
}

console.log(topologicalSort([1, 2, 3, 4], [
    [1, 2],
    [1, 3],
    [3, 2],
    [4, 2],
    [4, 3]
]))