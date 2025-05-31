// Islands and Treasure

// You are given a m×n 2D grid initialized with these three possible values:

// -1 - A water cell that can not be traversed.
// 0 - A treasure chest.
// INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
// Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest than the value should remain INF.

// Assume the grid can only be traversed up, down, left, or right.

// Modify the grid in-place.

// Example 1:
// Input: [
//   [2147483647,-1,0,2147483647],
//   [2147483647,2147483647,2147483647,-1],
//   [2147483647,-1,2147483647,-1],
//   [0,-1,2147483647,2147483647]
// ]
// Output: [
//   [3,-1,0,1],
//   [2,2,1,-1],
//   [1,-1,2,-1],
//   [0,-1,3,4]
// ]

// Example 2:
// Input: [
//   [0,-1],
//   [2147483647,2147483647]
// ]
// Output: [
//   [0,-1],
//   [1,2]
// ]

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// grid[i][j] is one of {-1, 0, 2147483647}

// Notes:
// We are using BFS from treasures to land instead of land to treasures
// Backwards loop on the queue makes sure we only process nodes on that level of BFS and we updated dist+1 to go to next level of BFS 

// O(row * col) time
// O(row * col) space
function islandsAndTreasure(grid) {
    let ROWS = grid.length;
    let COLS = grid[0].length;
    let visit = new Set();
    let q = [];

    const addCell = (r, c) => {
        if (r < 0 || c < 0 || r === ROWS || c === COLS || visit.has(`${r},${c}`) || grid[r][c] === -1) return;
        visit.add(`${r},${c}`);
        q.push([r, c]);
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 0) {
                q.push([r, c]);
                visit.add(`${r},${c}`);
            }
        }
    }

    let dist = 0;
    while (q.length) {
        for (let i = q.length; i > 0; i--) {
            let [r, c] = q.shift();
            grid[r][c] = dist;
            addCell(r + 1, c);
            addCell(r - 1, c);
            addCell(r, c + 1);
            addCell(r, c - 1);
        }
        dist += 1;
    }
}