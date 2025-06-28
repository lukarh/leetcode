/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
  let maxSum: number = 0;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversed: ListNode | null = null;
  let curr: ListNode | null = slow;

  while (curr !== null) {
    let nextTemp: ListNode | null = curr.next;
    curr.next = reversed;

    reversed = curr;
    curr = nextTemp;
  }

  while (reversed !== null) {
    let testSum: number = head.val + reversed.val;

    if (testSum > maxSum) {
      maxSum = testSum;
    } else {
      reversed = reversed.next;
      head = head.next;
    }
  }

  return maxSum;
}
