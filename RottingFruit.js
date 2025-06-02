// Rotting Fruit

// You are given a 2-D matrix grid. Each cell can have one of three possible values:

// 0 representing an empty cell
// 1 representing a fresh fruit
// 2 representing a rotten fruit

// Every minute, if a fresh fruit is horizontally or vertically adjacent to a rotten fruit, then the fresh fruit also becomes rotten.
// Return the minimum number of minutes that must elapse until there are zero fresh fruits remaining. If this state is impossible within the grid, return -1.

// Example 1:
// Input: grid = [[1,1,0],[0,1,1],[0,1,2]]
// Output: 4

// Example 2:
// Input: grid = [[1,0,1],[0,2,0],[1,0,1]]
// Output: -1

// Constraints:
// 1 <= grid.length, grid[i].length <= 10

// O(row * col) time
// O(row * col) space
function orangesRotting(grid) {
    const q = [];
    let fresh = 0;
    let mins = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) fresh += 1;
            if (grid[i][j] === 2) q.push([i, j]);
        }
    }

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (fresh > 0 && q.length > 0) {
        const length = q.length;
        for (let i = 0; i < length; i++) {
            const [r, c] = q.shift();

            for (const [dr, dc] of directions) {
                const row = r + dr;
                const col = c + dc;
                if (row < 0 || row >= grid.length || col < 0 && col >= grid[0].length || grid[row][col] !== 1) continue;
                grid[row][col] = 2;
                q.push([row, col]);
                fresh--;
            }
        }
        mins++;
    }
    return fresh === 0 ? mins : -1;
}