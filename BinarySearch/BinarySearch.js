// Binary Search
// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.
// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.
// Your solution must run in  O(logn) time.

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const midIndex = left + Math.floor((right - left) / 2)
        const midValue = nums[midIndex];

        if (midValue === target) return midIndex;

        if (midValue > target) {
            right = midIndex - 1;
        } else {
            left = midIndex + 1;
        }
    }

    return -1;
}

nums = [-1, 0, 3, 5, 9, 12];

console.log(binarySearch(nums, 9));
console.log(binarySearch(nums, -1));
console.log(binarySearch(nums, 3));