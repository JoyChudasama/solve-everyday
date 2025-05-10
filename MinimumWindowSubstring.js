// Minimum Window Substring

// Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".
// You may assume that the correct output is always unique.

// Example 1:
// Input: s = "OUZODYXAZ", t = "XYZ"
// Output: "YXAZ"V
// Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

// Example 2:
// Input: s = "xyz", t = "xyz"
// Output: "xyz"

// Example 3:
// Input: s = "x", t = "xy"
// Output: ""

// -----------------------NOT GONNA WORK WITH EDGE CASES----------------------
// function minWindow(s, t) {

//     if (t.length > s.length) return '';
//     if (t.length === 1 && s.length === 1) {
//         return t === s ? t : ''
//     }

//     let minWinSubString = s;
//     const tSet = new Set(t.split(''));

//     for (let i = 0; i < s.length; i++) {
//         const currChar = s[i];
//         if (!tSet.has(currChar)) continue;

//         const resSet = new Set();
//         let resCounter = 1;
//         resSet.add(currChar);
//         for (let j = i + 1; j < s.length; j++) {
//             if (resSet.has(s[j]) || resCounter === tSet.size || i < t.length) break;
//             resSet.add(s[j]);
//             if (tSet.has(s[j])) resCounter += 1;
//         }
//         if (resSet.size < minWinSubString.length && resCounter === t.length) {
//             minWinSubString = Array.from(resSet.values()).join('');
//         }
//     }

//     return minWinSubString;
// }


console.log(minWindow('OUZODYXAZV', 'XYZ'))
console.log(minWindow('xyz', 'xyz'))
console.log(minWindow('x', 'xyz'))
console.log(minWindow('ADOBECODEBANC', 'ABC'))
console.log(minWindow('a', 'b'))
console.log(minWindow('ab', 'A'))