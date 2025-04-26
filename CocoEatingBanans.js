
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