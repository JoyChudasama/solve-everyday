// Reconstruct Flight Path

// You are given a list of flight tickets tickets where tickets[i] = [from_i, to_i] represent the source airport and the destination airport.
// Each from_i and to_i consists of three uppercase English letters.
// Reconstruct the itinerary in order and return it.
// All of the tickets belong to someone who originally departed from "JFK". Your objective is to reconstruct the flight path that this person took, assuming each ticket was used exactly once.
// If there are multiple valid flight paths, return the lexicographically smallest one.
// For example, the itinerary ["JFK", "SEA"] has a smaller lexical order than ["JFK", "SFO"].
// You may assume all the tickets form at least one valid flight path.

// Example 1:
// Input: tickets = [["BUF","HOU"],["HOU","SEA"],["JFK","BUF"]]
// Output: ["JFK","BUF","HOU","SEA"]

// Example 2:
// Input: tickets = [["HOU","JFK"],["SEA","JFK"],["JFK","SEA"],["JFK","HOU"]]
// Output: ["JFK","HOU","JFK","SEA","JFK"]
// Explanation: Another possible reconstruction is ["JFK","SEA","JFK","HOU","JFK"] but it is lexicographically larger.

// Constraints:
// 1 <= tickets.length <= 300
// from_i != to_i


// O(E * V) time
// O(E * V) space
function findItinerary(tickets, start = 'JFK') {

    tickets.sort();

    const adjList = new Map();
    for (const [from, to] of tickets) {
        if (!adjList.has(from)) adjList.set(from, []);
        adjList.get(from).push(to);
    }

    const res = [start];
    const dfs = (node) => {
        if (res.length === tickets.length + 1) return true;

        const destinations = adjList.get(node);
        if (!destinations || destinations.length === 0) return false;

        for (let i = 0; i < destinations.length; i++) {
            const next = destinations[i];

            destinations.splice(i, 1);
            res.push(next);

            if (dfs(next)) return true;

            res.pop();
            destinations.splice(i, 0, next);
        }

        return false;
    };

    dfs(start);

    return res
}



console.log(findItinerary([["BUF", "HOU"], ["HOU", "SEA"], ["JFK", "BUF"]]))