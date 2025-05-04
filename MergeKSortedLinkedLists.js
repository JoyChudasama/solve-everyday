// Merge K Sorted Linked Lists

// You are given an array of k linked lists lists, where each list is sorted in ascending order.
// Return the sorted linked list that is the result of merging all of the individual linked lists.

// Example 1:
// Input: lists = [[1,2,4],[1,3,5],[3,6]]
// Output: [1,1,2,3,3,4,5,6]

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

// O(n * log n) time 
// O(n) space
function mergeKLists(lists) {
    const allNums = [];

    for (const list of lists) {
        getAllNums(list, allNums);
    }

    allNums.sort((a, b) => a - b);
    return createLinkedListFromArray(allNums);
}

function getAllNums(curr, allNums) {
    if (curr === null) return;
    allNums.push(curr.val);
    getAllNums(curr.next, allNums);
}

function createLinkedListFromArray(arr) {
    const dummy = new Node();
    let curr = dummy;
    for (const num of arr) {
        const newNode = new Node(num);
        curr.next = newNode;
        curr = curr.next;
    }

    return dummy.next;
}
