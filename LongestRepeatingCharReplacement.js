// Longest Repeating Character Replacement

// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.
// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// Example 1:
// Input: s = "XYYX", k = 2
// Output: 4
// Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

// Example 2:
// Input: s = "AAABABB", k = 1
// Output: 5

// O(n) time where n is the length of the string
// O(m) space where m is the unique chars in the string
function characterReplacement(s, k) {
    const count = {};
    let res = 0, l = 0;
    let mostFreqCharCount = 0;

    for (let r = 0; r < s.length; r++) {
        count[s[r]] = (count[s[r]] || 0) + 1;
        mostFreqCharCount = Math.max(count[s[r]], mostFreqCharCount);

        while ((r - l) + 1 - mostFreqCharCount > k) {
            count[s[l]] -= 1;
            l += 1;
        }

        res = Math.max((r - l) + 1, res);
    }

    return res;
}

console.log(characterReplacement("XYYX", 2));
console.log(characterReplacement("AAABABB", 1));