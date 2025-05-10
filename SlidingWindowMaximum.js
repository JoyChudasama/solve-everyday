// Sliding Window Maximum

// You are given an array of integers nums and an integer k. There is a sliding window of size k that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.
// Return a list that contains the maximum element in the window at each step.

// Example:
// Input: nums = [1,2,1,0,4,2,6], k = 3
// Output: [2,2,4,4,6]

import Deque from './Deque.js';

// O(n * k) time where n is length of array and k is the length of the window.
// O(n - k + 1) space where n is length of array and k is the length of the window. 
function maxSlidingWindow(nums, k) {
    const n = nums.length;
    const maxInKWindows = [];

    for (let i = 0; i < n; i++) {
        let counter = 0;
        let maxSoFar = Number.NEGATIVE_INFINITY;
        for (let j = i; j < n; j++) {
            maxSoFar = Math.max(maxSoFar, nums[j]);
            counter += 1;
            if (counter === k) break;
        }
        maxInKWindows.push(maxSoFar);
        if (i === n - k) break;
    }

    return maxInKWindows;
}

// Idea is to keep Monotonicall Decreasing DeQueue
// O(n) time where n is length of array
// O(n) space where n is length of the DeQueue 
function maxSlidingWindowOptimal(nums, k) {
    const n = nums.length;
    const maxInKWindows = new Array(n - k + 1);
    const dq = new Deque();
    let l = 0;
    let r = 0;

    while (r < n) {
        while (!dq.isEmpty() && nums[dq.back()] < nums[r]) {
            dq.popBack();
        }
        dq.pushBack(r);

        if (l > dq.front()) dq.popFront();

        if ((r + 1) >= k) {
            maxInKWindows[l] = nums[dq.front()];
            l += 1;
        }

        r += 1;
    }

    return maxInKWindows;
}

const nums = [1, 2, 1, 0, 4, 2, 6];
const k = 3;
console.log(maxSlidingWindow(nums, k));
console.log(maxSlidingWindowOptimal(nums, k));