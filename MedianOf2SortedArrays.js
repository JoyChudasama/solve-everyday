// Median of Two Sorted Arrays
// You are given two integer arrays nums1 and nums2 of size m and n respectively, where each is sorted in ascending order. Return the median value among all elements of the two arrays.

// Your solution must run in O(log(m+n)) time.

// Example 1:
// Input: nums1 = [1,2], nums2 = [3]
// Output: 2.0
// Explanation: Among [1, 2, 3] the median is 2.

// Example 2:
// Input: nums1 = [1,3], nums2 = [2,4]
// Output: 2.5
// Explanation: Among [1, 2, 3, 4] the median is (2 + 3) / 2 = 2.5.

function findMedianSortedArrays(arr1, arr2) {
    let a = arr1, b = arr2;

    // we want to run binary search on shorter array 
    if (a.length > b.length) {
        [a, b] = [b, a];
    }

    const full = a.length + b.length;
    const half = Math.floor((full + 1) / 2);
    let left = 0;
    let right = a.length;

    while (left <= right) {

        const i = Math.floor((left + right) / 2);
        const j = half - i;

        const Aleft = i > 0 ? a[i - 1] : Number.NEGATIVE_INFINITY;
        const Aright = i < a.length ? a[i] : Number.POSITIVE_INFINITY;
        const Bleft = j > 0 ? b[j - 1] : Number.NEGATIVE_INFINITY;
        const Bright = j < b.length ? b[j] : Number.POSITIVE_INFINITY;

        if (Aleft <= Bright && Bleft <= Aright) {
            if (full % 2 !== 0) {
                return Math.max(Aleft, Bleft);
            }

            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
        } else if (Aleft > Bright) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }

    return -1;
}

console.log(findMedianSortedArrays([1, 2], [3]))
console.log(findMedianSortedArrays([1, 3], [2, 4]))
console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 4, 4, 4]))