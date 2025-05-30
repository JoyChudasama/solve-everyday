// Number of Islands

// Given a 2D grid grid where '1' represents land and '0' represents water, count and return the number of islands.

// An island is formed by connecting adjacent lands horizontally or vertically and is surrounded by water. You may assume water is surrounding the grid (i.e., all the edges are water).

// Example 1:
// grid = [
//     ["0","1","1","1","0"],
//     ["0","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
// Output: 1

// Example 2:
// grid = [
//     ["1","1","0","0","1"],
//     ["1","1","0","0","1"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
// Output: 4

// O(r * c) time
// O(r * c) space
function numIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let islands = 0;

    const bfs = (r, c) => {
        const q = [];
        q.push([r, c]);
        grid[r][c] = '0';

        while (q.length > 0) {

            const [row, col] = q.shift();

            for (const [dr, dc] of directions) {
                const nr = row + dr, nc = col + dc;
                if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === '1') {
                    q.push([nr, nc]);
                    grid[nr][nc] = '0';
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                bfs(r, c);
                islands++;
            }
        }
    }

    return islands;
}