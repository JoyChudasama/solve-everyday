// Combination Sum 2

// You are given an array of integers candidates, which may contain duplicates, and a target integer target. Your task is to return a list of all unique combinations of candidates where the chosen numbers sum to target.
// Each element from candidates may be chosen at most once within a combination. The solution set must not contain duplicate combinations.
// You may return the combinations in any order and the order of the numbers in each combination can be in any order.

// Example 1:
// Input: candidates = [9,2,2,4,6,1,5], target = 8
// Output: [
//   [1,2,5],
//   [2,2,4],
//   [2,6]
// ]

// Example 2:
// Input: candidates = [1,2,3,4,5], target = 7
// Output: [
//   [1,2,4],
//   [2,5],
//   [3,4]
// ]

// FILLING THE TEMPLATE
// 1. Choice
// - add a currnet num with nums[i] or skip the num using nums[i+1]

// 2. Constraint?
// - currSum >= target or i is out of bound or the ans is already been used
// - duplicates are not allowed in a combination unless a num is appeared multiple times in the input array

// 3. Goal
// - currSum === target

// 4. Backtrack
// - pop the latest choice

// Trick: sort array so all the duplicates are adjacent and index can be moved ahead until next num is not a duplicate after explored a current num
function combinationSum2(nums, target) {
    const res = [];

    // The trick pt.1
    nums.sort((a, b) => a - b);

    const dfs = (i, combination, sum) => {
        if (sum === target) {
            res.push([...combination]);
            return;
        }

        if (i >= nums.length || sum > target) return;

        combination.push(nums[i]);
        dfs(i + 1, combination, sum + nums[i]);

        combination.pop();
        // The trick pt.2
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }

        dfs(i + 1, combination, sum);
    }

    dfs(0, [], 0);
    return res;
}

console.log(combinationSum2([9, 2, 2, 4, 6, 1, 5], 8))