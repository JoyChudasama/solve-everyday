const array = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]

// Solution 1 - O(n*log(n)) time | O(n) space
// function sortedSquaredArray(array) {
//     return array.map(e => e * e).sort((a, b) => a - b)
// }

// Solution 2 - O(n) time | O(n) space
function sortedSquaredArray(array) {
    const sortedArray = new Array(array.length).fill(0);
    let start = 0;
    let end = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const smallerValue = array[start];
        const largerValue = array[end];

        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortedArray[i] = smallerValue * smallerValue;
            start++;
        } else {
            sortedArray[i] = largerValue * largerValue;
            end--;
        }
    }

    return sortedArray
}

const result = sortedSquaredArray(array)
console.log(result)