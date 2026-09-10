import { describe, expect, it } from "vitest";

describe("uniformArray", () => {
  it("example test", () => {
    const nums1 = [2, 3];
    const result = uniformArray(nums1);
    expect(result).toEqual(true);

    const nums2 = [4, 6];
    const result2 = uniformArray(nums2);
    expect(result2).toEqual(true);

    const nums3 = [58];
    const result3 = uniformArray(nums3);
    expect(result3).toEqual(true);

    const nums4 = [23, 86];
    const result4 = uniformArray(nums4);
    expect(result4).toEqual(true);

    const nums5 = [30, 41];
    const result5 = uniformArray(nums5);
    expect(result5).toEqual(true);
  });
});

function uniformArray(nums1: number[]): boolean {
  let nums2 = [...nums1];
  const isEven = (n: number) => n % 2 == 0;

  if (nums1.length < 2) {
    return true;
  }
  if (nums1.every(isEven) !== true || !nums1.every(isEven) !== false) {
    nums2[0] = nums1[0] - nums1[1];

    return !nums2.every(isEven);
  }
  return true;
}
