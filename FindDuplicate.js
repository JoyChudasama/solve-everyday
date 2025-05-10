// Find the Duplicate

// You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive.
// Every integer appears exactly once, except for one integer which appears two or more times. Return the integer that appears more than once.
// Constraint: Solve the problem without modifying the array nums and using O(1) extra space.

// Example 1:
// Input: nums = [1,2,3,2,2]
// Output: 2

// Example 2:
// Input: nums = [1,2,3,4,4]
// Output: 4

// Floyd's Algo
// O(n) time where n is the length of array
// O(1) space
function findDuplicate(array) {

    let slow = 0;
    let fast = 0;

    while (true) {
        slow = array[slow];
        fast = array[array[fast]];
        if (slow === fast) break;
    }

    let slow2 = 0;
    while (true) {
        slow = array[slow];
        slow2 = array[slow2];

        if (slow === slow2) return slow;
    }

    return -1;
}

// Without constraint (modifying the input array)
// O(n) time where n is the length of array
// O(1) space
function findDuplicate(array) {
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) return array[i];
    }

    return -1;
}

// Without constraint (using O(n) space )
// O(n) time where n is the length of array
// O(n) space where n is the length of array
function findDuplicate(array) {
    const seenNums = new Set();

    for (let i = 0; i < array.length; i++) {
        if (seenNums.has(array[i])) return array[i];
        seenNums.add(array[i]);
    }

    return -1;
}

console.log(findDuplicate([1, 2, 3, 2, 2]));