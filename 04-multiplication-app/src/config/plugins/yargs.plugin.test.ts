async function runCommand(args: string[]) {
  process.argv = [...process.argv, ...args];

  const { yarg } = await import("./yargs.plugin");
  return yarg;
}

describe("Test in the config/plugins/yargs.plugin.ts file", () => {
  test("should return default values", async () => {
    const argv = runCommand(["-b", "5"]);
    console.log(argv);
  });
});
