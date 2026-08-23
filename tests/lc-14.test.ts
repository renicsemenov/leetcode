import { describe, expect, it } from "vitest";

describe("longestCommonPrefix", () => {
  it("example test", () => {
    // expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
    expect(longestCommonPrefix(["flower", "flow", "floweht"])).toEqual("flow");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
    expect(longestCommonPrefix(["a"])).toEqual("a");
  });
});

function longestCommonPrefix(strs: string[]): string {
  for (let i = 0; i < strs[0].length; i++) {
    const expectedChar = strs[0][i];

    for (let str of strs) {
      if (str[i] !== expectedChar) {
        return str.slice(0, i);
      }
    }
  }
  return strs[0];
}
