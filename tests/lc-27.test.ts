import { describe, expect, it } from "vitest";

describe("removeElement", () => {
  it("example test", () => {
    // const nums = [3, 2, 2, 3];
    // const val = 3;
    // const k = removeElement(nums, val);
    // expect(k).toEqual(2);
    // expect(nums.slice(0, k)).toEqual([2, 2]);

    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const k = removeElement(nums, val);
    expect(k).toEqual(5);
    expect(nums.slice(0, k)).toEqual(expect.arrayContaining([0, 1, 3, 0, 4]));
  });
});

function removeElement(nums: number[], val: number): number {
  let k = nums.filter((n) => n !== val);

  for (let i = 0; i < k.length; i++) {
    nums[i] = k[i];
  }
  return k.length;
}
