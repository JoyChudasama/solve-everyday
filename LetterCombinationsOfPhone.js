// Letter Combinations of a Phone Number

// You are given a string digits made up of digits from 2 through 9 inclusive.
// Each digit (not including 1) is mapped to a set of characters as shown below:
// A digit could represent any one of the characters it maps to.
// Return all possible letter combinations that digits could represent. You may return the answer in any order.

// Example 1:
// Input: digits = "34"
// Output: ["dg","dh","di","eg","eh","ei","fg","fh","fi"]

// Example 2:
// Input: digits = ""
// Output: []

// Constraints:
// 0 <= digits.length <= 4
// 2 <= digits[i] <= 9

// O(n*4^n) time
// O(n*4^n) space
function letterCombinations(digits) {

    const res = [];
    if (digits.length === 0) return res;

    const dict = getDigitToLettersMap();
    if (digits.length === 1) return dict[digits[0]];

    const backtrack = (i, curStr) => {
        if (curStr.length === digits.length) {
            res.push(curStr);
            return;
        }

        for (const char of dict[digits[i]]) {
            backtrack(i + 1, curStr + char);
        }
    }

    backtrack(0, '');
    return res;
}

function getDigitToLettersMap() {
    return {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
}

console.log(letterCombinations('22'))