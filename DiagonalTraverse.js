// Diagonal Traverse

// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

// Example 1:
// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]

// Example 2:
// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]

// O(row * col) time
// O(row * col) space
function findDiagonalOrder(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const res = [];
    let row = 0, col = 0;
    let direction = 'UP';

    while (res.length < m * n) {
        res.push(mat[row][col]);

        if (direction === 'UP') {
            if (col === n - 1) {
                // right boundary, move down
                row++;
                direction = 'DOWN';
            } else if (row === 0) {
                // top boundary, move right
                col++;
                direction = 'DOWN';
            } else {
                // normal up-right movement
                row--;
                col++;
            }
        } else {
            if (row === m - 1) {
                // bottom boundary, move right
                col++;
                direction = 'UP';
            } else if (col === 0) {
                // left boundary, move down
                row++;
                direction = 'UP';
            } else {
                // normal down-left movement
                row++;
                col--;
            }
        }
    }

    return res;
};

// console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(findDiagonalOrder([[1, 2]]));