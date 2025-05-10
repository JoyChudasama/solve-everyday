// Longest Consecutive Sequence

// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [2,20,4,10,3,4,5]
// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

// Example 2:
// Input: nums = [0,3,2,5,4,6,1,1]
// Output: 7

// O(n * log n) time
// O(1) space
function longestConsecutive(nums) {

    if (nums.length < 2) return nums.length;

    nums.sort((a, b) => a - b);

    let longestSoFar = 1;
    let currentLongest = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        if (1 === nums[i] - nums[i - 1]) {
            currentLongest += 1;
        } else {
            longestSoFar = Math.max(longestSoFar, currentLongest);
            currentLongest = 1;
        }
    }


    return Math.max(longestSoFar, currentLongest);
}

// O(n) time
// O(n) space
function longestConsecutiveOptimal(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) {
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;
}
