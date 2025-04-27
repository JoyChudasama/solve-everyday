// Search for range
/*
Write a function that takes in a sorted array of integers as well as a target
integer.The function should use a variation of the Binary Search algorithm to
find a range of indices in between which the target number is contained in the
array and should return this range in the form of an array.

The first number in the output array should represent the first index at which
the target number is located, while the second number should represent the
last index at which the target number is located.The function should return [-1, -1]
if the integer isn't contained in the array.

If you're unfamiliar with Binary Search, we recommend watching the Conceptual
Overview section of the Binary Search question's video explanation before
starting to code.
*/

const LEFT_SIDE = 'left';
const RIGHT_SIDE = 'right';

// O((log n) + m) time where n is the length of array and m is the length of the target's range
// O(1) space
function searchForRange(array, target) {
    let left = 0;
    let right = array.length - 1;
    const range = [-1, -1];

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            range[0] = getGivenSideOfRangeIndex(LEFT_SIDE, array, target, mid);
            range[1] = getGivenSideOfRangeIndex(RIGHT_SIDE, array, target, mid);
            break;
        } else {
            if (array[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return range;
}

function getGivenSideOfRangeIndex(side, array, target, currPointer) {
    const direction = side === LEFT_SIDE ? -1 : 1;
    let i = currPointer;

    while (i + direction >= 0 && i + direction < array.length && array[i + direction] === target) {
        i += direction;
    }

    return i;
}


// O(log n) time where n is the length of array
// O(1) space
function searchForRange2(array, target) {
    const range = [];
    range[0] = searchForRange2Helper(array, target, 0, array.length - 1, LEFT_SIDE);
    range[1] = searchForRange2Helper(array, target, 0, array.length - 1, RIGHT_SIDE);
    return range;
}

function searchForRange2Helper(array, target, left, right, direction) {

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] > target) {
            right = mid - 1;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            if (direction === LEFT_SIDE) {
                if (mid === 0 || array[mid - 1] !== target) {
                    return mid;
                } else {
                    right = mid - 1;
                }
            } else {
                if (mid === array.length - 1 || array[mid + 1] !== target) {
                    return mid;
                } else {
                    left = mid + 1;
                }
            }
        }
    }

    return -1;
}

console.log(searchForRange2([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 45));