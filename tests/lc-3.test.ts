import { describe, expect, it } from "vitest";

describe("romanToInt", () => {
  it("example test", () => {
    expect(romanToInt("III")).toEqual(3);
    expect(romanToInt("IV")).toEqual(4);
    expect(romanToInt("IX")).toEqual(9);
    expect(romanToInt("LVIII")).toEqual(58);
    expect(romanToInt("MCMXCIV")).toEqual(1994);
  });
});

function romanToInt(s: string): number {
  const newMap = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let total = 0;
  //   console.log(`===INPUT: ${s}`);

  for (let i = 0; i < s.length; i++) {
    const current: string = s[i];
    const currentValue: number = newMap.get(current)!;
    const next: string = s[i + 1];

    const rule1 = (next === "V" || next === "X") && current === "I";
    const rule2 = (next === "L" || next === "C") && current === "X";
    const rule3 = (next === "D" || next === "M") && current === "C";
    const isSubtractive = rule1 || rule2 || rule3;

    // console.log(current);
    if (isSubtractive) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    // console.log(`${s[i]} is ${current} and ${s[i + 1]} is ${next}`);
    // console.log("Total:", total);
  }
  console.log("Total:", total);
  return total;
}
