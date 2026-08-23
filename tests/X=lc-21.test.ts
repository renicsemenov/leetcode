import { describe, expect, it } from "vitest";

describe("mergeTwoLists", () => {
  it("example test", () => {
    expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toEqual([1, 1, 2, 3, 4, 4]);
    expect(mergeTwoLists([], [])).toEqual([]);
    expect(mergeTwoLists([], [0])).toEqual([0]);
  });
});

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

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const list2Val = list2?.val;
  console.log(list2Val);
  return list1;
}
