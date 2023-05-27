const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

// Solution 1 - O(n) time | O(1) space
function isValidSubsequence(array, sequence) {

    let seqIdx = 0

    for (let num of array) {
        if (seqIdx == sequence.length) return true
        if (num == sequence[seqIdx]) seqIdx += 1
    }

    return seqIdx == sequence.length
}

const result = isValidSubsequence(array, sequence)
console.log(result)