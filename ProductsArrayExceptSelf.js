// Products of Array Except Self

// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
// Each product is guaranteed to fit in a 32-bit integer.
// Follow-up: Could you solve it in O(n) time without using the division operation?

// Example 1:
// Input: nums = [1,2,4,6]
// Output: [48,24,12,8]

// Example 2:
// Input: nums = [-1,0,1,2,3]
// Output: [0,-6,0,0,0]

// Brute Force
// O(n^2) time
// O(n) space
function productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(n);

    for (let i = 0; i < n; i++) {
        let prod = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                prod *= nums[j];
            }
        }
        res[i] = prod;
    }
    return res;
}

// Prefix & Suffix
// O(n) time
// O(n) space
function productExceptSelfOptimal(nums) {
    const products = new Array(nums.length).fill(1);

    let temp = 1;
    for (let i = 0; i < nums.length; i++) {
        products[i] = temp;
        temp *= nums[i];
    }

    let temp1 = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        products[i] *= temp1
        temp1 *= nums[i];
    }

    return products;
}