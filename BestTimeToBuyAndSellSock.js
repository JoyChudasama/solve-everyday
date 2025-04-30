// Best Time to Buy and Sell Stock

// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

// Example 1:
// Input: prices = [10,1,5,6,7,1]
// Output: 6
// Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

// Example 2:
// Input: prices = [10,8,7,5,2]
// Output: 0
// Explanation: No profitable transactions can be made, thus the max profit is 0.

// O(n) time where n is the length of prices array
// O(1) sapce
function maxProfit(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            const currProfit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, currProfit);
        } else {
            left = right;
        }

        right += 1;
    }

    return maxProfit;
}

// O(n) time where n is the length of prices array
// O(1) sapce
function maxProfit2(prices) {
    let maxProfit = 0;
    let minBuy = prices[0];

    for (let price of prices) {
        maxProfit = Math.max(maxProfit, price - minBuy);
        minBuy = Math.min(minBuy, price);
    }

    return maxProfit;
}

console.log(maxProfit2([10, 1, 5, 6, 7, 1]))
console.log(maxProfit2([10, 1, 1, 1, 1, 1]))
console.log(maxProfit2([]))
console.log(maxProfit2([1,5,9,7]))