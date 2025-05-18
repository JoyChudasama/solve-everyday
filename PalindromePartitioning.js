// Palindrome Partitioning

// Given a string s, split s into substrings where every substring is a palindrome. Return all possible lists of palindromic substrings.

// You may return the solution in any order.

// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:
// Input: s = "a"
// Output: [["a"]]


// O(n * 2^n) time
// O(n * 2^n) space
function partition(s) {
    const res = [];
    const part = [];

    const backtrack = (i) => {
        if (i === s.length) {
            res.push([...part]);
            return;
        }
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                part.push(s.substring(i, j + 1));
                backtrack(j + 1);
                part.pop();
            }
        }
    }

    backtrack(0, [], []);
    return res;
}

function isPalindrome(s, l, r) {

    while (l < r) {
        if (s[l] !== s[r]) return false;
        l += 1;
        r -= 1;
    }

    return true;
}

console.log(partition("aab"));