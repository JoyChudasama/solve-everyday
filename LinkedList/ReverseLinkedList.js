class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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

const node5 = new LinkedListNode(5);
const node4 = new LinkedListNode(4);
const node3 = new LinkedListNode(3);
const node2 = new LinkedListNode(2);
const node1 = new LinkedListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


console.log(node1);
console.log(reverseLinkedList(node1));