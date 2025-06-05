// Surrounded Regions

// You are given a 2-D matrix board containing 'X' and 'O' characters.
// If a continous, four-directionally connected group of 'O's is surrounded by 'X's, it is considered to be surrounded.
// Change all surrounded regions of 'O's to 'X's and do so in-place by modifying the input board.

// Example 1:
// Input: board = [
//   ["X","X","X","X"],
//   ["X","O","O","X"],
//   ["X","O","O","X"],
//   ["X","X","X","O"]
// ]
// Output: [
//   ["X","X","X","X"],
//   ["X","X","X","X"],
//   ["X","X","X","X"],
//   ["X","X","X","O"]
// ]
// Explanation: Note that regions that are on the border are not considered surrounded regions.

// Constraints:
// 1 <= board.length, board[i].length <= 200
// board[i][j] is 'X' or 'O'.

// O(rows * cols) time
// O(rows * cols) space
function solve(board) {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r == rows || c == cols || board[r][c] !== 'O') return;
        board[r][c] = 'T';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
        if (board[r][0] === 'O') dfs(r, 0);
        if (board[r][cols - 1] === 'O') dfs(r, cols - 1);
    }

    for (let c = 0; c < cols; c++) {
        if (board[0][c] === 'O') dfs(0, c);
        if (board[rows - 1][c] === 'O') dfs(rows - 1, c);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            } else if (board[r][c] === 'T') {
                board[r][c] = 'O';
            };
        }
    }
}

