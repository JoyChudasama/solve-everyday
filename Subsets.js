// Subsets

// Given an array nums of unique integers, return all possible subsets of nums.

// The solution set must not contain duplicate subsets. You may return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [7]
// Output: [[],[7]]

// O(n*2^n) time
// O(2^n) space
function subsets(nums) {
    const res = [];
    const subset = [];
    const dfs = (i) => {
        if (i === nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        dfs(i + 1);

        subset.pop();
        dfs(i + 1);
    }

    dfs(0);
    return res;
}