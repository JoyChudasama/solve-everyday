// Reorder Linked List

// You are given the head of a singly linked-list.
// The positions of a linked list of length = 7 for example, can intially be represented as:
// [0, 1, 2, 3, 4, 5, 6]
// Reorder the nodes of the linked list to be in the following order:
// [0, 6, 1, 5, 2, 4, 3]
// Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:
// [0, n-1, 1, n-2, 2, n-3, ...]
// You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

// Example:
// Input: head = [2,4,6,8]
// Output: [2,8,4,6]


// O(n) time where n is the length of linkedList
// O(n) space where n is the number of nodes stored in an array
function reorderList(head) {
    // nodesArr = []
    // 1 -> 2 -> 5 -> 6 -> 8 -> 10
    // 1 -> 10 -> 2 -> 8 -> 5 -> 6 

    const nodesArray = [];
    let currNode = head;
    while (null !== currNode) {
        nodesArray.push(currNode);
        currNode = currNode.next;
    }

    let left = 0;
    let right = nodesArray.length - 1;
    let prevNode = null;
    while (left < right) {

        if (null !== prevNode) {
            prevNode.next = nodesArray[left];
        }

        nodesArray[left].next = nodesArray[right];
        prevNode = nodesArray[right];

        left += 1;
        right -= 1;
    }

    prevNode.next = nodesArray[left];
}

// O(n) time where n is the length of linkedList
// O(1) space
function reorderListOptimal(head) {
    // 1.cut LL in half
    // 2.reverse the second half
    // 3.merge both half

    // cut LL in half
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = slow.next;
    slow.next = null; // splitting in half
    let prev = null
    // reverse second half
    while (secondHalf !== null) {
        const next = secondHalf.next;

        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = next;
    }

    let firstHalf = head;
    secondHalf = prev;
    // merge both half
    while (secondHalf !== null) {

        const firstHalfNext = firstHalf.next;
        const secondHalfNext = secondHalf.next;

        firstHalf.next = secondHalf;
        secondHalf.next = firstHalfNext;

        firstHalf = firstHalfNext;
        secondHalf = secondHalfNext;
    }
}


class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node5 = new LinkedListNode(10);
const node4 = new LinkedListNode(8);
const node3 = new LinkedListNode(6);
const node2 = new LinkedListNode(4);
const node1 = new LinkedListNode(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


console.log('------------------------------ UNORDERD ------------------------------');
print(node1)
console.log('------------------------------ REORDERING ------------------------------');
reorderListOptimal(node1)
console.log('------------------------------ REORDERD ------------------------------');
print(node1)


function print(node) {
    console.log(
        node.value,
        node.next.value,
        node.next.next.value,
        node.next.next.next.value,
        node.next.next.next.next.value,
    );
}