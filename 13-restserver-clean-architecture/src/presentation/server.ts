import express, { Router } from "express";

interface Options {
  port: number;
  routes: Router;
}
export class Server {
  private app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    this.port = options.port;
    this.routes = options.routes;
  }

  async start() {
    //*
    this.app.use(express.json());
    //* Public folder
    this.app.use(express.static("public"));

    //* Routes
    this.app.use("/api/v1", this.routes);

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
