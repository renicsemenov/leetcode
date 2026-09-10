import { describe, expect, it } from "vitest";

describe("smallestMissingMultiple", () => {
  it("example test", () => {
    // const nums = [8, 2, 3, 4, 6];
    // const k = 2;
    // const result = missingMultiple(nums, k);
    // expect(result).toEqual(10);

    const nums2 = [1, 4, 7, 10, 15];
    const k2 = 5;
    const result2 = missingMultiple(nums2, k2);
    expect(result2).toEqual(5);
  });
});

function missingMultiple(nums: number[], k: number): number {
  let n = k;

  while (nums.includes(n)) {
    n += k;
  }
  return n;
}
