// Linked List Cycle Detection

// Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.
// There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.
// Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.
// Note: index is not given to you as a parameter.

// O(n) time where n is the number of nodes
// O(n) time where n is the number of nodes in the Set
function hasCycle(head) {
    let seen = new Set();
    let curr = head;
    while (curr) {
        if (seen.has(curr)) {
            return true;
        }
        seen.add(curr);
        curr = curr.next;
    }

    return false;
}

// O(n) time where n is the number of nodes
// O(1) space
function hasCycle(head) {
    let fast = head;
    let slow = head;

    while (slow && fast?.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) return true;
    }

    return false;
}

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node5 = new LinkedListNode(5);
const node4 = new LinkedListNode(4);
const node3 = new LinkedListNode(3);
const node2 = new LinkedListNode(2);
const node1 = new LinkedListNode(1);

node1.next = node2;
node2.next = node1;
// node3.next = node4;
// node4.next = node5;
// node4.next = node2


console.log(hasCycle(node1));