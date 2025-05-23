// Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

function spiralOrder(matrix) {
    const res = [];
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endCol = matrix[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {

        for (let i = startCol; i <= endCol; i++) {
            res.push(matrix[startRow][i]);
        }

        for (let i = startRow + 1; i <= endRow; i++) {
            res.push(matrix[i][endCol]);
        }

        for (let i = endCol - 1; i >= startCol; i--) {
            if (startRow === endRow) break;
            res.push(matrix[endRow][i]);
        }

        for (let i = endRow - 1; i > startRow; i--) {
            if (startCol === endCol) break;
            res.push(matrix[i][startCol]);
        }

        startRow += 1;
        endRow -= 1;
        startCol += 1;
        endCol -= 1;
    }

    return res;
}

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));