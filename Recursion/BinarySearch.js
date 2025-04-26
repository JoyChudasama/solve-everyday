function binarySearch(array, target, left, right) {

    if (left > right) return -1;

    const mid = left + Math.floor(Math.floor(right - left) / 2);
    const midVal = array[mid];

    if (midVal === target) return mid;

    return (
        midVal < target ?
            binarySearch(array, target, mid + 1, right) :
            binarySearch(array, target, left, mid - 1)
    );
}

nums = [-1, 0, 3, 5, 9, 12];

console.log(binarySearch(nums, 9, 0, nums.length - 1));
console.log(binarySearch(nums, -1, 0, nums.length - 1));
console.log(binarySearch(nums, 3, 0, nums.length - 1));