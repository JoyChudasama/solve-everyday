// Combination Sum

// You are given an array of distinct integers nums and a target integer target. Your task is to return a list of all unique combinations of nums where the chosen numbers sum to target.
// The same number may be chosen from nums an unlimited number of times. Two combinations are the same if the frequency of each of the chosen numbers is the same, otherwise they are different.
// You may return the combinations in any order and the order of the numbers in each combination can be in any order.

// Example 1:
// nums = [2,5,6,9] 
// target = 9
// Output: [[2,2,5],[9]]
// Explanation:
// 2 + 2 + 5 = 9. We use 2 twice, and 5 once.
// 9 = 9. We use 9 once.

// Example 2:
// nums = [3,4,5]
// target = 16
// Output: [[3,3,3,3,4],[3,3,5,5],[4,4,4,4],[3,4,4,5]]

// Example 3:
// nums = [3]
// target = 5
// Output: []


// FILLING THE TEMPLATE
// 1. Choice
// - add a currnet num with nums[i] or skip the num using nums[i+1]

// 2. Constraint?
// - currSum >= target or i is out of bound 

// 3. Goal
// - currSum === target

// 4. Backtrack
// - pop the latest choice


// O(2*(t/m)) time where t is the target and m is the minimum value in nums
// O(t/m) space where t is the target and m is the minimum value in nums
function combinationSum(nums, target) {
    const res = [];

    const dfs = (i, combination, sum) => {
        // Goal
        if (sum === target) {
            res.push([...combination]);
            return;
        }

        // Constraint
        if (i >= nums.length || sum > target) return;

        // Chooosing current num
        combination.push(nums[i]);
        dfs(i, combination, sum + nums[i]);

        // Backtracking
        combination.pop();
        
        //Exploring next num 
        dfs(i+1, combination, sum);
    }

    dfs(0, [], 0);
    return res;
}

console.log(combinationSum([2, 5, 6, 9], 9))


