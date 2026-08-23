import { describe, expect, it } from "vitest";

describe("distributeElements", () => {
  it("example test", () => {
    expect(resultArray([2, 1, 3])).toEqual([2, 3, 1]);
    expect(resultArray([5, 4, 3, 8])).toEqual([5, 3, 4, 8]);
  });
});

function resultArray(nums: number[]): number[] {
  const copyArr = [...nums];
  let arr1: number[] = [copyArr.shift()!];
  let arr2: number[] = [copyArr.shift()!];

  while (copyArr.length > 0) {
    if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
      arr1.push(copyArr.shift()!);
    } else {
      arr2.push(copyArr.shift()!);
    }
  }

  return arr1.concat(arr2);
}
