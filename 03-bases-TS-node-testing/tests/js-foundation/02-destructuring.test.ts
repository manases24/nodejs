import { characters } from "../../src/js-foundation/02-destructuring";

describe("Test in the 'js-foundation/02-destructuring.ts' file", () => {
  test("charactes should containt Flash, Superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("first character should be Flash, and second Superman", () => {
    const [flash, superman] = characters;
    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
