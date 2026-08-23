import { describe, expect, it } from "vitest";

describe("smallestNumber", () => {
  it("example test", () => {
    expect(smallestNumber(10, 2)).toEqual(10);
    expect(smallestNumber(15, 3)).toEqual(16);
    expect(smallestNumber(91, 10)).toEqual(0);
  });
});

function smallestNumber(n: number, t: number): number {
  for (let i = n; i < 1000; i++) {
    const productN = i
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc * cur, 1);
      console.log(`i: ${i}, productN: ${productN}`);

    if (productN % t === 0) {
      return i;
    }
  }
  return n;
}
