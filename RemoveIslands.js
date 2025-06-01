// Remove Islands 

// You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only @ sand 1 s. 
// The matrix represents a two-toned image, where each (1 represents black and each @ represents white. An island is defined as any number of
// 1 s that are horizontally or vertically adjacent (but not diagonally adjacent) and that don't touch the border of the image. 

// In other words, a group of horizontally or vertically adjacent 1's isn't an island if any of those (1s are in the first row, last row, first column, or last column of the input matrix.

// Note that an island can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped,

// for example:
// You can think of islands as patches of black that don't touch the border of the two-toned image.
// Write a function that returns a modified version of the input matrix, where all of the islands are removed. You remove an island by
// replacing it with 0s.

// Naturally, you're allowed to mutate the input matrix.

// input: matrix = [
//   [1, 0, 0, 0, 0, 0],
//   [0, 1, 0, 1, 1, 1],
//   [0, 0, 1, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 1]
// ]
// output: 
// [
//   [1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1],
//   [0, 0, 0, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 1],
// ]

// O(row * col) time
// O(row * col) space
function removeIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1) return;
        grid[r][c] = -1;
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let c = 0; c < cols; c++) {
        if (grid[0][c] === 1) dfs(0, c);            
        if (grid[rows - 1][c] === 1) dfs(rows - 1, c);  
    }

    for (let r = 0; r < rows; r++) {
        if (grid[r][0] === 1) dfs(r, 0);            
        if (grid[r][cols - 1] === 1) dfs(r, cols - 1);  
    }

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) grid[r][c] = 0;
            if (grid[r][c] === -1) grid[r][c] = 1;
        }
    }

    return grid;
}

console.log(removeIslands([
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
])); 