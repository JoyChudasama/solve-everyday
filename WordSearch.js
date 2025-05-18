// Word Search

// Given a 2-D grid of characters board and a string word, return true if the word is present in the grid, otherwise return false.

// For the word to be present it must be possible to form it with a path in the board with horizontally or vertically neighboring cells. The same cell may not be used more than once in a word.

// Example 1:
// board = [
//   ["A","B","C","D"],
//   ["S","A","A","T"],
//   ["A","C","A","E"]
// ],
// word = "CAT"
// Output: true

// Example 2:
// board = [
//   ["A","B","C","D"],
//   ["S","A","A","T"],
//   ["A","C","A","E"]
// ],
// word = "BAT"
// Output: false


// Filling the template
// Choices: Go in 4 directions from a cell
// Constraint: Can't revisit a cell, and board[row][col] === word[i]
// Goal: Match all characters in order (idx === word.length)
// Backtrack step: Mark cell unvisited after exploring all paths from it

// O(row*col*(4^w)) time where w is length of a given word
// O(row*col*(4^w)) time where w is length of a given word
function exist(board, word) {

    const visitedCells = Array.from({ length: board.length }, () => Array(board[0].length).fill(0));
    for (let i = 0; i < visitedCells.length; i++) {
        for (let j = 0; j < visitedCells[i].length; j++) {
            visitedCells[i][j] = 0;
        }
    }

    const totalRows = board.length;
    const totalCols = board[0].length;

    const backtrack = (row, col, i) => {

        if (i === word.length) return true;

        if (
            row < 0 || row >= totalRows ||
            col < 0 || col >= totalCols ||
            visitedCells[row][col] ||
            board[row][col] !== word[i]
        ) {
            return false;
        }

        visitedCells[row][col] = 1;
        const found = backtrack(row + 1, col, i + 1) || backtrack(row - 1, col, i + 1) || backtrack(row, col + 1, i + 1) || backtrack(row, col - 1, i + 1);
        visitedCells[row][col] = false;
        return found;
    }

    for (let i = 0; i < totalRows; i++) {
        for (let j = 0; j < totalCols; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}