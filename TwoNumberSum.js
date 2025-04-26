const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 4


// Solution 1 - O(n^2) time | O(1) space
// function twoNumberSum(array, targetSum) {

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] == targetSum) {
//                 return [array[i], array[j]]
//             }
//         }
//     }

//     return []
// }


// Solution 2 - O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
    const nums = {}

    for (let i = 0; i < array.length; i++) {

        const potentialMatch = targetSum - array[i]

        if (potentialMatch in nums) {
            return [potentialMatch, array[i]]
        }

        nums[array[i]] = true
    }

    return []
}

const result = twoNumberSum(array, targetSum)
console.log(result)