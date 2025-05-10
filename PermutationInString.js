// Permutation in String

// You are given two strings s1 and s2.
// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.
// Both strings only contain lowercase letters.

// Example 1:
// Input: s1 = "abc", s2 = "lecabee"
// Output: true
// Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

// Example 2:
// Input: s1 = "abc", s2 = "lecaabee"
// Output: false


// O(n * m) time where n is length of s1 and m is the length s2
// O(1) space as max length of hashtable would be 26(number of alphabets)
function checkInclusion(s1, s2) {
    let count1 = {};
    for (let c of s1) {
        count1[c] = (count1[c] || 0) + 1;
    }

    let need = Object.keys(count1).length;
    for (let i = 0; i < s2.length; i++) {
        let count2 = {};
        let cur = 0;
        for (let j = i; j < s2.length; j++) {
            let c = s2[j];
            count2[c] = (count2[c] || 0) + 1;

            if ((count1[c] || 0) < count2[c]) {
                break;
            }

            if ((count1[c] || 0) === count2[c]) {
                cur++;
            }

            if (cur === need) {
                return true;
            }
        }
    }
    return false;

}

console.log(checkInclusion("abc", "lecabee")); //true
console.log(checkInclusion("abc", "lecaabee")); //false
console.log(checkInclusion("", "lecaabee")); //false
console.log(checkInclusion("abc", "")); //false
console.log(checkInclusion("abc", "a")); //false
console.log(checkInclusion("c", "ab")); //false
console.log(checkInclusion("b", "ab")); //true