// Kadane's Algorithm
// Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all of the integers in a
// non-empty subarray of the input array. A subarray must only contain adjacent numbers (numbers next to each other in the input array).

// Example
// array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// result = 19  
// Explanation - sum of the this sub array [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1] is max compare to any other sub array sums 

// O(n) time where n is length of the array
// O(1) space
function kadanesAlgorithm(array) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let curr = 0;

    for (let i = 0; i < array.length; i++) {
        if (curr < 0) curr = 0;
        curr += array[i];
        maxSum = Math.max(maxSum, curr);
    }

    return maxSum
}

// O(n) time where n is length of the array
// O(1) space
function kadanesAlgorithm(array) {

    let maxEndingHere = array[0]
    let maxSoFar = array[0]
  
    for(let i=1;i<array.length;i++){
      maxEndingHere = Math.max(array[i], maxEndingHere + array[i])
      maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }
  
    return maxSoFar
  }

console.log(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))
console.log(kadanesAlgorithm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(kadanesAlgorithm([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5]))