// N-Queens

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard so that no two queens can attack each other.
// A queen in a chessboard can attack horizontally, vertically, and diagonally.
// Given an integer n, return all distinct solutions to the n-queens puzzle.
// Each solution contains a unique board layout where the queen pieces are placed. 'Q' indicates a queen and '.' indicates an empty space.
// You may return the answer in any order.

// Example 1:
// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] //Making strings a matrix helps to visualize why this is the output
// Explanation: There are two different solutions to the 4-queens puzzle.

// Example 2:
// Input: n = 1
// Output: [["Q"]]

// O(n!) time
// O(n2) space
function NQueens(n) {
    const cols = new Set();
    const posDiag = new Set();
    const negDiag = new Set();
    const board = Array.from({ length: n }, () => Array(n).fill('.'))
    const res = [];

    const backtrack = (row) => {
        if (row === n) {
            res.push(board.map(e => e.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            const posDiagCalc = row + col;
            const negDiagCalc = row - col;

            if (cols.has(col) || posDiag.has(posDiagCalc) || negDiag.has(negDiagCalc)) continue;

            cols.add(col);
            posDiag.add(posDiagCalc);
            negDiag.add(negDiagCalc);
            board[row][col] = 'Q';

            backtrack(row + 1);

            cols.delete(col)
            posDiag.delete(posDiagCalc);
            negDiag.delete(negDiagCalc);
            board[row][col] = '.';
        }
    }

    backtrack(0);
    return res;
}