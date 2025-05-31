// River Sizes 

// You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only |@ sand 1's. Each @
// represents land, and each 1 represents part of a river. A river consists of any number of 1 s that are either horizontally or vertically
// adjacent (but not diagonally adjacent). The number of adjacent 1's forming a river determine its size.

// Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for
// example.

// Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order.
// Input: 
// matrix = [
//             [1, 0, 0, 1, 0],
//             [1, 0, 1, 0, 0],
//             [0, 0, 1, 0, 1],
//             [1, 0, 1, 0, 1],
//             [1, 0, 1, 1, 0]
//          ]

// Output: 
// [1, 2, 2, 2, 5] The numbers could be ordered differently.

// O(row * col) time
// O(row * col) space
function riverSizes(matrix) {
    const rivers = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    const seen = new Set();

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || matrix[r][c] === 0 || seen.has(`${r},${c}`)) return 0;
        seen.add(`${r},${c}`);

        let size = 1;
        size += dfs(r + 1, c)
        size += dfs(r - 1, c)
        size += dfs(r, c + 1)
        size += dfs(r, c - 1);
        return size;
    }

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 1 && !(seen.has(`${r},${c}`))) {
                rivers.push(dfs(r, c));
            };
        }
    }

    return rivers;
}

console.log(riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
]));