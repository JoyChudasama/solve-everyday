// Word Search II

// Given a 2-D grid of characters board and a list of strings words, return all words that are present in the grid.
// For a word to be present it must be possible to form the word with a path in the board with horizontally or vertically neighboring cells. The same cell may not be used more than once in a word.

// Example 1:
// board = [
//   ["a","b","c","d"],
//   ["s","a","a","t"],
//   ["a","c","k","e"],
//   ["a","c","d","n"]
// ],
// words = ["bat","cat","back","backend","stack"]
// Output: ["cat","back","backend"]


class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }

    addWord(word) {
        let cur = this;
        for (const c of word) {
            if (!(c in cur.children)) {
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];
        }
        cur.isWord = true;
    }
}

// O((m * n) * 4 *(3^t-1) + s) time where m*n is the board, t is the max length of a word and 4 is the number of direction and s is the sum of the lengths of all the words
// O(s) space
function findWords(board, words) {
    const root = new TrieNode();
    for (const word of words) {
        root.addWord(word);
    }

    const m = board.length;
    const n = board[0].length;
    const res = new Set();
    const visit = new Set();

    const dfs = (r, c, node, word) => {
        if (r < 0 || c < 0 || r >= m ||
            c >= n || visit.has(`${r},${c}`) ||
            !(board[r][c] in node.children)) {
            return;
        }

        visit.add(`${r},${c}`);
        node = node.children[board[r][c]];
        word += board[r][c];
        if (node.isWord) {
            res.add(word);
        }

        dfs(r + 1, c, node, word);
        dfs(r - 1, c, node, word);
        dfs(r, c + 1, node, word);
        dfs(r, c - 1, node, word);

        visit.delete(`${r},${c}`);
    };

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            dfs(r, c, root, "");
        }
    }

    return Array.from(res);
}


console.log(
    findWords(
        [
            ["a", "b", "c", "d"],
            ["s", "a", "a", "t"],
            ["a", "c", "k", "e"],
            ["a", "c", "d", "n"]
        ],
        ["bat", "cat", "back", "backend", "stack"]
    )
);