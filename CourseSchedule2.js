// Course Schedule II

// You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// There are a total of numCourses courses you are required to take, labeled from 0 to numCourses - 1.
// Return a valid ordering of courses you can take to finish all courses. If there are many valid answers, return any of them. If it's not possible to finish all courses, return an empty array.

// Example 1:
// Input: numCourses = 3, prerequisites = [[1,0]]
// Output: [0,1,2]
// Explanation: We must ensure that course 0 is taken before course 1.

// Example 2:
// Input: numCourses = 3, prerequisites = [[0,1],[1,2],[2,0]]
// Output: []
// Explanation: It's impossible to finish all courses.

// Constraints:
// 1 <= numCourses <= 1000
// 0 <= prerequisites.length <= 1000
// All prerequisite pairs are unique.

// O(vertices + edges) time
// O(vertices + edges) space
function findOrder(numCourses, prerequisites) {

    const adjMap = new Map();
    for (let i = 0; i < numCourses; i++) adjMap.set(i, []);
    for (const [course, prerequisite] of prerequisites) adjMap.get(course).push(prerequisite);

    const currVisiting = new Set();
    const seen = new Set();
    let courseOrder = [];

    const dfs = (course) => {
        if (currVisiting.has(course)) return false;
        if (seen.has(course)) return true;

        currVisiting.add(course);

        for (const prerequisite of adjMap.get(course)) {
            if (!dfs(prerequisite)) return false;
        }

        currVisiting.delete(course);
        seen.add(course)
        courseOrder.push(course);

        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }

    return courseOrder;
}