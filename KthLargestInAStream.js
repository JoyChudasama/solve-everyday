// Kth Largest Element in a Stream

// Design a class to find the kth largest integer in a stream of values, including duplicates. E.g. the 2nd largest from [1, 2, 3, 3] is 3. The stream is not necessarily sorted.

// Implement the following methods:

// constructor(int k, int[] nums) Initializes the object given an integer k and the stream of integers nums.
// int add(int val) Adds the integer val to the stream and returns the kth largest integer in the stream.
// Example 1:

// Input:
//      ["KthLargest", [3, [1, 2, 3, 3]], "add", [3], "add", [5], "add", [6], "add", [7], "add", [8]]

// Output:
//      [null, 3, 3, 3, 5, 6]

// Explanation:
//      KthLargest kthLargest = new KthLargest(3, [1, 2, 3, 3]);
//      kthLargest.add(3);   // return 3
//      kthLargest.add(5);   // return 3
//      kthLargest.add(6);   // return 3
//      kthLargest.add(7);   // return 5
//      kthLargest.add(8);   // return 6

// O(n * log n) time
// O(n) space
class KthLargest {

    // O(1) time
    // O(n) space
    constructor(k, nums) {
        this.k = k;
        this.nums = nums;
    }

    // O(n*log n) time
    // O(1) space
    add(val) {
        this.nums.push(val);
        this.nums.sort((a, b) => a - b);
        return this.nums[this.nums.length - this.k]
    }
}