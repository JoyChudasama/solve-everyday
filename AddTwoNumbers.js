// Add Two Numbers

// You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.
// The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.
// Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Return the sum of the two numbers as a linked list.

// Example 1:
// Input: l1 = [1,2,3], l2 = [4,5,6]
// Output: [5,7,9]
// Explanation: 321 + 654 = 975.

// Example 2:
// Input: l1 = [9], l2 = [9]
// Output: [8,1]


// O(n + m) where n is length of l1 and m is length of l2
// O(1) space
addTwoNumbers(l1, l2) {
    const dummy = new ListNode();
    let curr = dummy
    let carry = 0;

    while (l1 || l2 || carry) {

        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        let value = v1 + v2 + carry;

        carry = Math.floor(value / 10);
        value = value % 10;
        curr.next = new ListNode(value);

        curr = curr.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
}