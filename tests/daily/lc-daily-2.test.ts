import { describe, expect, it } from "vitest";

describe("missingInteger", () => {
  it("example test", () => {
    // expect(missingInteger([1, 2, 3, 2, 5])).toEqual(6);
    // expect(missingInteger([1, 2, 3, 6, 5, 7, 8])).toEqual(9);
    // expect(missingInteger([3, 4, 5, 1, 12, 14, 13])).toEqual(15);
    // expect(missingInteger([1, 2, 3])).toEqual(6);
    // expect(missingInteger([1])).toEqual(2);
    // expect(missingInteger([1, 2])).toEqual(3);
    // expect(missingInteger([1, 2, 3, 4])).toEqual(10);
  });
});

function missingInteger(nums: number[]): number {
  let num = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const c = nums[i];
    const p = nums[i - 1];

    if (c !== p + 1) {
      break;
    }

    num += c;
  }

  const set = new Set(nums);

  while (set.has(num)) {
    num++;
  }

  return num;
}
