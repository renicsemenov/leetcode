import { describe, expect, it } from "vitest";

describe("Two Sum", () => {
  it.only("example test", { retry: 3 }, () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 1, 3, 4, 5, 6], 6)).toEqual([0, 2]);
    expect(twoSum([2, 3, 3, 4], 6)).toEqual([0, 3]);
  });
});

// function twoSum1(nums: number[], target: number): number[] {
//   const n = nums.length;

//   for (let x = 0; x < n - 1; x++) {
//     // console.log( x );
//     for (let y = x + 1; y < n; y++) {
//       //   console.log({ x, y });
//       if (nums[x] + nums[y] == target) {
//         return [x, y];
//       }
//     }
//   }
// }

var twoSum = function (nums: number[], target: number): number[] {
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    console.log({ diff, mp });

    if (mp.has(diff)) {
      return [mp.get(diff), i];
    }

    mp.set(nums[i], i);
  }
};
