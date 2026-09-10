import { describe, expect, it } from "vitest";

describe("strStr", () => {
  it("example test", () => {
    const haystack = "sadbutsad";
    const needle = "sad";
    const result = strStr(haystack, needle);
    expect(result).toEqual(0);

    const haystack2 = "leetcode";
    const needle2 = "leeto";
    const result2 = strStr(haystack2, needle2);
    expect(result2).toEqual(-1);
  });
});

function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
}