// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without duplicate characters.
// A substring is a contiguous sequence of characters within a string.

// Example 1:
// Input: s = "zxyzxyz"
// Output: 3
// Explanation: The string "xyz" is the longest without duplicate characters.

// Example 2:
// Input: s = "xxxx"
// Output: 1

// O(n) time where n is the length of given string
// O(n) space where n is the length of given string as it is possible that longest substring is the whole string itself
function lengthOfLongestSubstring(string) {

    let longestSubStringCount = 0;
    let l = 0;
    const charSet = new Set();

    for (let r = 0; r < string.length; r++) {
        while (charSet.has(string[r])) {
            charSet.delete(string[l]);
            l += 1;
        }

        charSet.add(string[r]);
        longestSubStringCount = Math.max(longestSubStringCount, r - l + 1);
    }


    return longestSubStringCount;
}

console.log(lengthOfLongestSubstring("zxyzxyz"));
console.log(lengthOfLongestSubstring("xx"));
console.log(lengthOfLongestSubstring(" "));