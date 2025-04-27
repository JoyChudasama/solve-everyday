// Search in Rotated Sorted Array
// You are given an array of length n which was originally sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
//      [3,4,5,6,1,2] if it was rotated 4 times.
//      [1,2,3,4,5,6] if it was rotated 6 times.
// Given the rotated sorted array nums and an integer target, return the index of target within nums, or -1 if it is not present.
// You may assume all elements in the sorted rotated array nums are unique,
// A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

// Example 1:
// Input: nums = [3,4,5,6,1,2], target = 1
// Output: 4

// O(log n) time where n is the length of the array
// O(1) space
function shiftedBinarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        const midNum = array[mid];
        const leftNum = array[left];
        const rightNum = array[right];

        if (midNum === target) {
            return mid;
        } else if (leftNum <= midNum) {
            if(target < midNum && target >= leftNum){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(target > midNum && target <= rightNum){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }

    return -1;
}
const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];

console.log(shiftedBinarySearch(array, 33))
console.log(shiftedBinarySearch(array, 0))
console.log(shiftedBinarySearch(array, 37))
console.log(shiftedBinarySearch(array, -1))
console.log(shiftedBinarySearch(array, 45))