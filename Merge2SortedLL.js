// Merge Two Sorted Linked Lists

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.
// The new list should be made up of nodes from list1 and list2.



function mergeTwoLists(ll01, ll02) {

    let a = ll01;
    let b = ll02;
    const temp = new LinkedListNode();
    let tail = temp;

    while (a && b) {

        if (a.value < b.value) {
            tail.next = a;
            a = a.next;
        } else {
            tail.next = b;
            b = b.next;
        }

        tail = tail.next;
    }

    if (a) {
        tail.next = a;
    } else if (b) {
        tail.next = b;
    }

    return temp.next;
}



class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const node13 = new LinkedListNode(5);
const node12 = new LinkedListNode(4);
const node11 = new LinkedListNode(2);

const node03 = new LinkedListNode(3);
const node02 = new LinkedListNode(2);
const node01 = new LinkedListNode(1);

node01.next = node02;
node02.next = node03;

node11.next = node12;
node12.next = node13

const res = [];
let node = mergeTwoLists(node01, node11);
while (node) {
    res.push(node.value);
    node = node.next;
}
console.log(res);