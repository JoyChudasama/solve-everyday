// Search a 2D Matrix
// You are given an m x n 2-D integer array matrix and an integer target. Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row. Return true if target exists within matrix or false otherwise.
// Can you write a solution that runs in O(log(m * n)) time?


// O(n*m) time where n is number of rows and m is number of columns
// O(1) space
function matrixSearch(matrix, target) {

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (matrix[row][col] === target) return true;
        }
    }

    return false;
}

// O(log(n*m)) time where n is number of rows and m is number of columns
// O(1) space
function matrixSearch(matrix, target) {

    let rowTop = 0;
    let rowBottom = matrix.length - 1;

    while (rowTop <= rowBottom) {
        const currentrow = Math.floor((rowTop + rowBottom) / 2);
        const currentroWFirstValue = matrix[currentrow][0];
        const currentroWLastValue = matrix[currentrow][matrix[currentrow].length - 1];

        if (target > currentroWLastValue) {
            rowTop = currentrow + 1;
        } else if (target < currentroWFirstValue) {
            rowBottom = currentrow - 1;
        } else {
            break;
        }
    }

    if (!(rowTop <= rowBottom)) return false;

    const row = Math.floor((rowTop + rowBottom) / 2);
    let colLeft = 0;
    let colRight = matrix[row].length - 1;

    while (colLeft <= colRight) {
        const colMid = Math.floor((colLeft + colRight) / 2);
        const colMidValue = matrix[row][colMid];

        if (colMidValue === target) return true;

        if (colMidValue > target) {
            colRight = colMid - 1;
        } else if (colMidValue < target) {
            colLeft = colMid + 1;
        }
    }

    return false;
}


// matrix = [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]]
// matrix = [[1], [3]]
matrix=[[1]]
// console.log(matrixSearch(matrix, 3));
// console.log(matrixSearch(matrix, 14));
console.log(matrixSearch(matrix, 1));
console.log(matrixSearch(matrix, 0));