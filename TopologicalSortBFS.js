function topologicalSort(jobs, deps) {
    const adjList = new Map();
    for (let i = 0; i < jobs.length; i++) adjList.set(jobs[i], []);
    for (const [a, b] of deps) adjList.get(b).push(a);

    const indegrees = new Array(jobs.length + 1).fill(0);
    for (const [a, b] of adjList) {
        for (const i of b) {
            indegrees[i] += 1;
        }
    }

    const q = [];
    for (let i = 1; i < indegrees.length; i++) {
        if (indegrees[i] === 0) q.push(i);
    }

    const res = [];
    while (q.length) {
        const cur = q.shift();
        res.push(cur);

        for (const node of adjList.get(cur)) {
            indegrees[node] -= 1;
            if (indegrees[node] === 0) q.push(node)
        }
    }

    return res;
}

console.log(topologicalSort(
    [1, 2, 3, 4],
    [
        [1, 2],
        [1, 3],
        [3, 2],
        [4, 2],
        [4, 3]
    ]
));