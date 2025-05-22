// Implement Trie (Prefix Tree)

// A prefix tree (also known as a trie) is a tree data structure used to efficiently store and retrieve keys in a set of strings. Some applications of this data structure include auto-complete and spell checker systems.

// Implement the PrefixTree class:
//      PrefixTree() Initializes the prefix tree object.
//      void insert(String word) Inserts the string word into the prefix tree.
//      boolean search(String word) Returns true if the string word is in the prefix tree (i.e., was inserted before), and false otherwise.
//      boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.


class TrieNode {
    constructor() {
        this.children = {};
        this.endOfTheWord = false;
    }
}

// O(n) time where n is the length of the given string
// O(n) where n is the number of TrieNodes created ub tge Trie
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;

        for (const char of word) {
            if (!(curr.children[char])) curr.children[char] = new TrieNode();
            curr = curr.children[char];
        }

        curr.endOfTheWord = true;
    }

    search(word) {
        let curr = this.root;

        for (const char of word) {
            if (!(curr.children[char])) return false;
            curr = curr.children[char];
        }

        return curr.endOfTheWord;
    }

    startsWith(prefix) {
        let curr = this.root;

        for (const char of prefix) {
            if (!(curr.children[char])) return false;
            curr = curr.children[char];
        }

        return true;
    }
}
