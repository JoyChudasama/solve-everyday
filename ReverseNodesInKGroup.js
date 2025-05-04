// Reverse Nodes in K-Group

// You are given the head of a singly linked list head and a positive integer k.
// You must reverse the first k nodes in the linked list, and then reverse the next k nodes, and so on. If there are fewer than k nodes left, leave the nodes as they are.
// Return the modified list after reversing the nodes in each group of k.
// You are only allowed to modify the nodes' next pointers, not the values of the nodes.

// Example 1:
// Input: head = [1,2,3,4,5,6], k = 3
// Output: [3,2,1,6,5,4]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]


// O(n) time where n is the length of linkedlist
// O(1) space
function reverseKGroup(head, k) {
    if (!head || k <= 1) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;

    while (true) {
        let kth = getKthNode(groupPrev, k);
        if (!kth) break;

        let groupNext = kth.next;

        // Reverse group
        let prev = kth.next;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            const tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        // Reconnect the reversed group
        const tmp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = tmp;
    }

    return dummy.next;
}

function getKthNode(curr, k) {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
}