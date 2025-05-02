// Remove Node From End of Linked List

// You are given the beginning of a linked list head, and an integer n.
// Remove the nth node from the end of the list and return the beginning of the list.

// Example 1:
// Input: head = [1,2,3,4], n = 2
// Output: [1,2,4]

// Example 2:
// Input: head = [5], n = 1
// Output: []


function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;
    let rightPointer = 0;

    while (rightPointer !== n) {
        rightPointer += 1;
        right = right.next;
    }

    while (right) {
        right = right.next;
        left = left.next;
    }

    left.next = left.next.next;

    return dummy.next;
}


