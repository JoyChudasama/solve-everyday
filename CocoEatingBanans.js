// Koko Eating Bananas
// You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.
// You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.
// Return the minimum integer k such that you can eat all the bananas within h hours.

// Example 1:
// Input: piles = [1,4,3,2], h = 9
// Output: 2
// Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

class Solution {

    // O(n*m) time where n is the length of piles and m is the max bananas in a pile
    // O(1) space
    minEatingSpeed(piles, h) {
        let speed = 1;

        while (true) {
            let totalTime = 0;
            for (let pile of piles) {
                totalTime += Math.ceil(pile / speed);
            }

            if (totalTime <= h) return speed;

            speed += 1;
        }
    }

    // Optimization using BinarySearch where conditions are reversed
    // O(n * log m) time where n is the length of piles and m is the max bananas in a pile
    // O(1) space
    optimalMinEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let res = right;

        while (left <= right) {
            const k = Math.floor((left + right) / 2);

            let totalTime = 0;
            for (const pile of piles) {
                totalTime += Math.ceil(pile / k);
            }

            if (totalTime <= h) {
                res = k;
                right = k - 1;
            } else {
                left = k + 1;
            }
        }

        return res;
    }
}

const piles = [25, 10, 23, 4];

const sol = new Solution;

console.log(sol.minEatingSpeed(piles, 4));
console.log(sol.optimalMinEatingSpeed(piles, 4));