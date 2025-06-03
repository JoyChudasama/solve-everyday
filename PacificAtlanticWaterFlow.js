// Pacific Atlantic Water Flow

// You are given a rectangular island heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
// The islands borders the Pacific Ocean from the top and left sides, and borders the Atlantic Ocean from the bottom and right sides.
// Water can flow in four directions (up, down, left, or right) from a cell to a neighboring cell with height equal or lower. Water can also flow into the ocean from cells adjacent to the ocean.
// Find all cells where water can flow from that cell to both the Pacific and Atlantic oceans. Return it as a 2D list where each element is a list [r, c] representing the row and column of the cell. You may return the answer in any order.

// Example 1:
// Input: heights = [
//   [4,2,7,3,4],
//   [7,4,6,4,7],
//   [6,3,5,3,6]
// ]
// Output: [[0,2],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4],[2,0]]

// Example 2:
// Input: heights = [[1],[1]]
// Output: [[0,0],[0,1]]

// Constraints:
// 1 <= heights.length, heights[r].length <= 100
// 0 <= heights[r][c] <= 1000

// Note:
// Go over the edges of Atlantic and Pacific separately and store coordinates in sets separately
// If coordinates are in both means water from that cell can go to Atlantic and Pacific
// Condition will have to be inverted from >= to < because we are flowing from outside to inside

// O(rows * cols) time
// O(rows * cols) space
function pacificAtlantic(heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const atlantic = new Set();
    const pacific = new Set();
    const res = [];

    const dfs = (r, c, visited, prevHeight) => {
        if (visited.has(`${r},${c}`) || r < 0 || c < 0 || r >= rows || c >= cols || heights[r][c] < prevHeight) return;

        visited.add(`${r},${c}`);

        dfs(r + 1, c, visited, heights[r][c]);
        dfs(r - 1, c, visited, heights[r][c]);
        dfs(r, c + 1, visited, heights[r][c]);
        dfs(r, c - 1, visited, heights[r][c]);
    }

    for (let i = 0; i < cols; i++) {
        dfs(0, i, pacific, heights[0][i]);
        dfs(rows - 1, i, atlantic, heights[rows - 1][i]);
    }

    for (let i = 0; i < rows; i++) {
        dfs(i, 0, pacific, heights[i][0]);
        dfs(i, cols - 1, atlantic, heights[i][cols - 1]);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacific.has(`${r},${c}`) && atlantic.has(`${r},${c}`)) res.push([r, c]);
        }
    }

    return res;
}