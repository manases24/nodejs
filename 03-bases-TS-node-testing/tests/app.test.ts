// Run -> pnpm test

describe("Test in the App file", () => {
  test("should be true", () => {
    expect(true).toBe(true);

    // 1. Arrange
    const num1 = 1;
    const num2 = 3;

    // 2. Act
    const result = num1 + num2;

    // 3. Assert
    expect(result).toBe(4);
  });
});
