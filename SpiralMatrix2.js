// Spiral Matrix 2

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

function spiralOrder(n) {
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    let num = 1;
    const res = Array.from({ length: n }, () => Array(n));

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            res[startRow][i] = num++;
        }

        for (let i = startRow + 1; i <= endRow; i++) {
            res[i][endCol] = num++;
        }

        for (let i = endCol - 1; i >= startCol; i--) {
            if (startRow === endRow) break;
            res[endRow][i] = num++;
        }

        for (let i = endRow - 1; i > startRow; i--) {
            if (startCol === endCol) break;
            res[i][startCol] = num++;
        }

        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }

    return res;
}

console.log(spiralOrder(3));