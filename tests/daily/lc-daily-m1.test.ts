import { describe, expect, it } from "vitest";

describe("longestSubsequence", () => {
  it("example test", () => {
    expect(longestSubsequence([1, 2, 3])).toEqual(2);
    expect(longestSubsequence([2, 3, 4])).toEqual(3);
    expect(longestSubsequence([0, 0, 0])).toEqual(0);
  });
});

function longestSubsequence(nums: number[]): number {
  const totalXOR = nums.reduce((acc, n) => acc ^ n, 0);

  if (totalXOR !== 0) {
    return nums.length;
  } else if (nums.some((n) => n != 0)) {
    return nums.length - 1;
  }
  return 0;
}
