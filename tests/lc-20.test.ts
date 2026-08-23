import { describe, expect, it } from "vitest";

describe("isValid", () => {
  it("example test", () => {
    expect(isValid("()")).toEqual(true);
    expect(isValid("()[]{}")).toEqual(true);
    expect(isValid("(]")).toEqual(false);
    expect(isValid("([])")).toEqual(true);
    expect(isValid("([)]")).toEqual(false);
    expect(isValid("()")).toEqual(true);
    expect(isValid("[]")).toEqual(true);
    expect(isValid("{}")).toEqual(true);
  });
});

function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs = new Map<string, string>([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (const i of s) {
    if ("([{".includes(i)) {
      stack.push(pairs.get(i)!);
    } else {
      if (stack.pop() !== i) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
