class TrieNode {
    constructor() {
        this.children = {};
        this.endOfTheWord = false;
    }
}

class Trie {

    constructor() {
        this.root = new TrieNode();
        this.wildCard = '.';
    }

    addWord(word) {
        let curr = this.root;

        for (const char of word) {
            if (!(curr.children[char])) curr.children[char] = new TrieNode();
            curr = curr.children[char];
        }

        curr.endOfTheWord = true;
    }

    searchWord(word) {

        const dfs = (i, root) => {
            let curr = root;

            for (let j = i; j < word.length; j++) {
                const char = word[j];

                if (char === this.wildCard) {
                    for (const child of Object.values(curr.children)) {
                        return dfs(j + 1, child) ? true : false;
                    }
                } else {
                    if (!(curr.children[char])) return false
                    curr = curr.children[char];
                }
            }

            curr.endOfTheWord;
        }

        return dfs(0, this.root);
    }
}