import { describe, expect, it } from "vitest";

describe("removeDuplicates", () => {
  it("example test", () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toEqual(2);
    expect(nums.slice(0, k)).toEqual([1, 2]); // ← the check you were missing

    expect(removeDuplicates([1, 1, 2])).toEqual(2);
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
    // expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
  });
});

function removeDuplicates(nums: number[]): number {
    const k = new Set(nums);
    const arr = [...k];

    for (let i = 0; i < k.size; i++){
        nums[i] = arr[i];
    }

    return k.size;
};