// Word Ladder

// You are given two words, beginWord and endWord, and also a list of words wordList. All of the given words are of the same length, consisting of lowercase English letters, and are all distinct.
// Your goal is to transform beginWord into endWord by following the rules:

// You may transform beginWord to any word within wordList, provided that at exactly one position the words have a different character, and the rest of the positions have the same characters.
// You may repeat the previous step with the new word that you obtain, and you may do this as many times as needed.
// Return the minimum number of words within the transformation sequence needed to obtain the endWord, or 0 if no such sequence exists.

// Example 1:
// Input: beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sag","dag","dot"]
// Output: 4
// Explanation: The transformation sequence is "cat" -> "bat" -> "bag" -> "sag".

// Example 2:
// Input: beginWord = "cat", endWord = "sag", wordList = ["bat","bag","sat","dag","dot"]
// Output: 0
// Explanation: There is no possible transformation sequence from "cat" to "sag" since the word "sag" is not in the wordList.

// Constraints:
// 1 <= beginWord.length <= 10
// 1 <= wordList.length <= 100

// O(m * n^2) time
// O(m * n) space
function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    const adjList = new Map();
    wordList.push(beginWord);
    for (const word of wordList) {
        for (let i = 0; i < word.length; i++) {
            const pattern = word.substring(0, i) + '*' + word.substring(i + 1);
            if (!adjList.has(pattern)) adjList.set(pattern, []);
            adjList.get(pattern).push(word);
        }
    }

    const q = [beginWord];
    const seenWords = new Set();
    let ladderLength = 1; // 1 because we already have a beginWord
    while (q.length) {
        const size = q.length;

        for (let s = 0; s < size; s++) {
            const word = q.shift();
            if (word === endWord) return ladderLength;
            for (let i = 0; i < word.length; i++) {
                const pattern = word.substring(0, i) + '*' + word.substring(i + 1);
                for (const nei of adjList.get(pattern)) {
                    if (seenWords.has(nei)) continue;
                    seenWords.add(nei);
                    q.push(nei);
                }
            }
        }

        ladderLength += 1;
    }

    return 0;
}

console.log(ladderLength('cat', 'sag', ["bat", "bag", "sag", "dag", "dot"]));
console.log(ladderLength('cat', 'sag', ["bat", "bag", "sat", "dag", "dot"]));