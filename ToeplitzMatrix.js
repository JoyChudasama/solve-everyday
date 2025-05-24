// Toeplitz Matrix

// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

// Example 1:
// Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// Output: true
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.

// Example 2:
// Input: matrix = [[1,2],[2,2]]
// Output: false
// Explanation:
// The diagonal "[1, 2]" has different elements.

function matrixReshape(mat) {
    const m = mat.length;
    const n = mat[0].length;
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (mat[i][j] != mat[i - 1][j - 1]) return false;
        }     
    }
	
    return true;
};

console.log(matrixReshape([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]));