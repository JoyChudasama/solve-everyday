class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time where n is the number of nodes
// O(1) space 
function reverseLinkedList(head) {
    let previousNode = null
    let currentNode = head

    while (currentNode) {
        let nextNode = currentNode.next

        currentNode.next = previousNode
        previousNode = currentNode
        currentNode = nextNode
    }

    return previousNode
}

// O(n) time where n is the number of nodes
// O(n) space where n is the number of function calls 
function reverseLinkedListRecursively(curr, prev = null) {
    if (curr === null) return prev;

    const next = curr.next;

    curr.next = prev;
    prev = curr;

    return reverseLinkedListRecursively(next, prev);
}

const node5 = new LinkedListNode(5);
const node4 = new LinkedListNode(4);
const node3 = new LinkedListNode(3);
const node2 = new LinkedListNode(2);
const node1 = new LinkedListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


console.log(reverseLinkedListRecursively(node1));