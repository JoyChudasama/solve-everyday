// Find Minimum in Rotated Sorted Array

// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
//      [3,4,5,6,1,2] if it was rotated 4 times.
//      [1,2,3,4,5,6] if it was rotated 6 times.

// Notice that rotating the array 4 times moves the last four elements of the array to the beginning. Rotating the array 6 times produces the original array.
// Assuming all elements in the rotated sorted array nums are unique, return the minimum element of this array.
// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Example 1:
// Input: nums = [3,4,5,6,1,2]
// Output: 1


class FindInArray {

    constructor(array) {
        this.array = array;
    }

    // O(n) time 
    // O(1) space
    minValue(){
        return Math.min(...this.array);
    }

    // O(log n) time as used Binary Search 
    // O(1) space
    optimalMinValue() {
        let left = 0;
        let right = this.array.length - 1;
        let result = this.array[left];

        while (left <= right) {
            if (this.array[left] < this.array[right]) {
                result = Math.min(this.array[left], result);
                break;
            }

            let mid = Math.floor((left + right) / 2);
            result = Math.min(result, this.array[mid]);

            if (this.array[mid] >= this.array[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result
    }

}

console.log(new FindInArray([3, 4, 5, 6, 1, 2]).minValue());
console.log(new FindInArray([3, 4, -5, 6, -1, 2]).optimalMinValue());