// 1394. Find Lucky Integer in an Array

// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
// Return the largest lucky integer in the array. If there is no lucky integer return -1.

// Example 1:
// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

// Example 2:
// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

// Example 3:
// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.
 
// Constraints:
// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500


// O(n*log n) time
// O(1) space
function findLucky(arr) {
    arr.sort((a, b) => a - b);
    let largestLuckyNum = -1;

    for (let i = 0; i < arr.length; i++) {
        let j = i;
        let counter = 0;
        while (j < arr.length && arr[j] === arr[i]) {
            j += 1;
            counter += 1;
        }

        if (counter === arr[i] && arr[i] > largestLuckyNum) {
            largestLuckyNum = arr[i];
        }

        i = j - 1;
    }

    return largestLuckyNum;
};

// O(n) time
// O(n) space
function findLucky(arr) {
    const counts = {};

    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] = (counts[arr[i]] || 0) + 1;
    }

    let largestLuckyNum = -1;
    for (const [k, v] of Object.entries(counts)) {
        const num = parseInt(k);
        if (num === v && num > largestLuckyNum) {
            largestLuckyNum = num;
        }
    }

    return largestLuckyNum;
};