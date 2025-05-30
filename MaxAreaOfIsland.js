// Max Area of Island

// You are given a matrix grid where grid[i] is either a 0 (representing water) or 1 (representing land).
// An island is defined as a group of 1's connected horizontally or vertically. You may assume all four edges of the grid are surrounded by water.
// The area of an island is defined as the number of cells within the island.
// Return the maximum area of an island in grid. If no island exists, return 0.

// Example 1:
// grid = [
//   [0,1,1,0,1],
//   [1,0,1,0,1],
//   [0,1,1,0,1],
//   [0,1,0,0,1]
// ]
// Output: 6
// Explanation: 1's cannot be connected diagonally, so the maximum area of the island is 6.


// O(row * col) time
// O(row * col) space because of the callstack
function maxAreaOfIsland(grid) {
    const totalRows = grid.length;
    const totalCols = grid[0].length;
    let maxIslandSoFar = 0;

    const dfs = (r, c, curIslandLength) => {
        if (r >= totalRows || c >= totalCols || r < 0 || c < 0 || grid[r][c] === 0) return 0;

        grid[r][c] = 0;
        return (1 + dfs(r - 1, c, curIslandLength + 1) + dfs(r + 1, c, curIslandLength + 1) +
            dfs(r, c + 1, curIslandLength + 1) + dfs(r, c - 1, curIslandLength + 1)
        );
    }

    for (let i = 0; i < totalRows; i++) {
        for (let j = 0; j < totalCols; j++) {
            if (grid[i][j] === 1) {
                const islandSize = dfs(i, j);
                maxIslandSoFar = Math.max(maxIslandSoFar, islandSize);
            }
        }
    }

    return maxIslandSoFar;
}

console.log(maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]));