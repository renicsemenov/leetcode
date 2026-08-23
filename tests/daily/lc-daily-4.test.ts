import { describe, expect, it } from "vitest";

describe("checkDivisibility", () => {
  it("example test", () => {
    expect(checkDivisibility(99)).toEqual(true);
    expect(checkDivisibility(23)).toEqual(false);
    expect(checkDivisibility(10)).toEqual(true);
    expect(checkDivisibility(8)).toEqual(false);
  });
});

function checkDivisibility(n: number): boolean {
  const nSplit = n.toString().split("");
  let nSum = 0;
  let nProduct = 1;
  
  for (let num of nSplit) {
    nSum = nSum + Number(num);
    nProduct = nProduct * Number(num);
  }

  return n % (nSum + nProduct) === 0;
}
