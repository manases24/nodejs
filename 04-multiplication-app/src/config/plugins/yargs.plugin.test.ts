async function runCommand(args: string[]) {
  process.argv = [...process.argv, ...args];

  const { yarg } = await import("./yargs.plugin");
  return yarg;
}

describe("Test in the config/plugins/yargs.plugin.ts file", () => {
  test("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);
    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "multiplication-table",
        d: "outputs",
      })
    );
  });
});
