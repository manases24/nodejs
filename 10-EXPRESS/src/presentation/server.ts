import express from "express";

interface Options {
  port: number;
}
export class Server {
  private app = express();
  private readonly port: number;

  constructor(options: Options) {
    this.port = options.port;
  }

  async start() {
    //* Middlewares
    //* Public folder
    this.app.use(express.static("public"));

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
