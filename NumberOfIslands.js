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

// Notes: 
// We have to loop over each direction for each grid[row][col] to find the adjacent with boundry check and grid[r][c] being 1
// We don't require Set() to keep track of what we have visited because we are marking each visited node as 0 and in our check we are only exploring node that is not 0  

// O(r * c) time
// O(r * c) space
function numIslands(grid) {
    const totalRows = grid.length;
    const totalCols = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let islands = 0;

    const bfs = (r, c) => {
        const q = [];
        q.push([r, c]);
        grid[r][c] = '0'; // Marking as seen

        while (q.length > 0) {

            const [row, col] = q.shift();

            // Going in each direction to see if it is a valid node or not
            for (const [dr, dc] of directions) {
                const nr = row + dr, nc = col + dc;
                
                // Only explore further if indices are valid and cell is 1
                if (nr >= 0 && nc >= 0 && nr < totalRows && nc < totalCols && grid[nr][nc] === '1') {
                    q.push([nr, nc]);
                    grid[nr][nc] = '0'; // Marking as seen
                }
            }
        }
    }

    // Run the exploration on each cell if value is 1
    for (let r = 0; r < totalRows; r++) {
        for (let c = 0; c < totalCols; c++) {
            if (grid[r][c] === '1') {
                bfs(r, c);
                islands++;
            }
        }
    }

    return islands;
}