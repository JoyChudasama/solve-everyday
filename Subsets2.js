// Subsets II

// You are given an array nums of integers, which may contain duplicates. Return all possible subsets.

// The solution must not contain duplicate subsets. You may return the solution in any order.

// Example 1:
// Input: nums = [1,2,1]
// Output: [[],[1],[1,2],[1,1],[1,2,1],[2]]

// Example 2:
// Input: nums = [7,7]
// Output: [[],[7], [7,7]]

// O(n*2^n) time
// O(2^n) space
function subsets(nums) {
    const res = new Map();
    const curr = [];
    nums.sort((a, b) => a - b)

  
    const backtrack = (i) => {
        if (i === nums.length) {
            const key = JSON.stringify(curr);
            res.set(key, [...curr]);
            return;
        }

        curr.push(nums[i]);
        backtrack(i + 1);

        curr.pop();
        backtrack(i + 1);
    }

    backtrack(0);
    return Array.from(res.values());
}

console.log(subsets([1, 2, 1]))