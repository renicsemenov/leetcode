import { describe, expect, it } from "vitest";

describe("firstStableIndex", () => {
  it("example test", () => {
    const nums1 = [5, 0, 1, 4];
    const k1 = 3;
    const result1 = firstStableIndex(nums1, k1);
    expect(result1).toEqual(3);

    const nums2 = [3, 2, 1];
    const k2 = 1;
    const result2 = firstStableIndex(nums2, k2);
    expect(result2).toEqual(-1);

    const nums3 = [0];
    const k3 = 0;
    const result3 = firstStableIndex(nums3, k3);
    expect(result3).toEqual(0);

    const nums4 = [0, 0];
    const k4 = 0;
    const result4 = firstStableIndex(nums4, k4);
    expect(result4).toEqual(0);

    const nums5 = [8, 2];
    const k5 = 6;
    const result5 = firstStableIndex(nums5, k5);
    expect(result5).toEqual(0);

    const nums6 = [4, 3];
    const k6 = 0;
    const result6 = firstStableIndex(nums6, k6);
    expect(result6).toEqual(-1);
  });
});

function firstStableIndex(nums: number[], k: number): number {
  let copyNums: number[] = [...nums];
  let arr: number[] = [];

  for (let i = 0; copyNums.length >= 1; i++) {
    arr.push(copyNums[0]);
    if (Math.max(...arr) - Math.min(...copyNums) <= k) {
      return i;
    }
    copyNums.shift();
    continue;
  }
  return -1;
}
