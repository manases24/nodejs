interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
}

export class ServerApp {
  static run(options: RunOptions) {
    console.log("Server run");
    console.log({ options });
  }
}
