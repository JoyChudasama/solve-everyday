// Permutations

// Given an array nums of unique integers, return all the possible permutations. You may return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [7]
// Output: [[7]]

// FILLING THE TEMPLATE
// 1. Choice
// - num to replace

// 2. Constraint
// - dont use the same index twice in one path

// 3. Goal
// - i === nums.length

// 4. Backtrack
// - swap back the nums to original places

// O(n! * n) time
// O(n! * n) space
function permutations(nums) {

    const res = [];
    const curr = [...nums];

    const backtrack = (i, nums) => {
        if (i === nums.length) {
            res.push([...nums]);
            return;
        }

        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            backtrack(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    backtrack(0, curr);
    return res;
}

console.log(permutations([1, 2, 3]));